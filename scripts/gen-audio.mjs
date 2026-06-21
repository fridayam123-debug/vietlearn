// Build-time script: generates MP3 files for all Vietnamese texts
// Run via: node scripts/gen-audio.mjs
// Uses the same DJB2 hash as lib/audio.ts to produce identical filenames.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const AUDIO_DIR = path.join(ROOT, 'public', 'audio')

// Must match lib/audio.ts djb2()
function djb2(str) {
  let h = 5381
  for (let i = 0; i < str.length; i++) {
    h = (((h << 5) + h) + str.charCodeAt(i)) & 0xffffffff
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

function audioFilename(text) {
  return djb2(text) + '.mp3'
}

function extractTexts(content, ...keys) {
  const texts = new Set()
  for (const key of keys) {
    // Single-quoted strings
    const re1 = new RegExp(`\\b${key}:\\s*'([^']+)'`, 'g')
    let m
    while ((m = re1.exec(content)) !== null) texts.add(m[1])
    // Double-quoted strings
    const re2 = new RegExp(`\\b${key}:\\s*"([^"]+)"`, 'g')
    while ((m = re2.exec(content)) !== null) texts.add(m[1])
  }
  return texts
}

async function downloadTTS(text, filepath) {
  if (fs.existsSync(filepath)) return 'cached'
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=vi&client=tw-ob`
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Referer': 'https://translate.google.com/',
    }
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buf = await res.arrayBuffer()
  fs.writeFileSync(filepath, Buffer.from(buf))
  return 'downloaded'
}

async function main() {
  fs.mkdirSync(AUDIO_DIR, { recursive: true })

  const allTexts = new Set()

  // Vocab files — extract vi: values
  const vocabFiles = [
    'school','food','animals','family','daily',
    'numbers-time','travel','cooking','mart',
    'electronics','hotel','real-estate','business',
  ]
  for (const name of vocabFiles) {
    const content = fs.readFileSync(path.join(ROOT, 'data', `${name}.ts`), 'utf-8')
    for (const t of extractTexts(content, 'vi')) allTexts.add(t)
  }

  // Alphabet — extract char: and example: values
  const alphabetContent = fs.readFileSync(path.join(ROOT, 'data', 'alphabet.ts'), 'utf-8')
  for (const t of extractTexts(alphabetContent, 'char', 'example')) allTexts.add(t)

  // Conversations — extract vi: values from lines
  const convContent = fs.readFileSync(path.join(ROOT, 'data', 'conversations.ts'), 'utf-8')
  for (const t of extractTexts(convContent, 'vi')) allTexts.add(t)

  const texts = [...allTexts]
  console.log(`Generating audio for ${texts.length} unique Vietnamese texts...`)

  let cached = 0, downloaded = 0, failed = 0
  const BATCH = 5

  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH)
    const results = await Promise.allSettled(
      batch.map(text => downloadTTS(text, path.join(AUDIO_DIR, audioFilename(text))))
    )
    for (let j = 0; j < results.length; j++) {
      if (results[j].status === 'fulfilled') {
        results[j].value === 'cached' ? cached++ : downloaded++
      } else {
        failed++
        console.warn(`\n  ✗ "${batch[j]}": ${results[j].reason?.message}`)
      }
    }
    process.stdout.write(
      `\r  ${Math.min(i + BATCH, texts.length)}/${texts.length}  ` +
      `(${downloaded} new, ${cached} cached, ${failed} failed)`
    )
    if (i + BATCH < texts.length) await new Promise(r => setTimeout(r, 60))
  }

  console.log(`\nAudio generation complete.`)
  if (failed > 0) console.log(`  ${failed} files missing — will fall back to device TTS.`)
}

main().catch(err => {
  console.warn('gen-audio error:', err.message)
  // Exit 0 so next build still runs
})
