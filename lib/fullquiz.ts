import { VocabItem } from './types'

export type FQType = 'vi-to-ko' | 'ko-to-vi' | 'sentence-blank'

export interface FQQuestion {
  type: FQType
  item: VocabItem
  prompt: string       // what the user sees as the question
  sentence?: string    // sentence with ___ for sentence-blank type
  options: string[]    // 4 choices
  correct: string
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function extractViSentence(usage: string): string {
  const prefix = 'Ví dụ: '
  const start = usage.startsWith(prefix) ? prefix.length : 0
  const parenIdx = usage.indexOf(' (', start)
  if (parenIdx === -1) return usage.substring(start).trim()
  return usage.substring(start, parenIdx).replace(/\.$/, '').trim()
}

function extractKoSentence(usage: string): string {
  const last = usage.lastIndexOf('(')
  const end  = usage.lastIndexOf(')')
  if (last === -1 || end === -1) return ''
  return usage.substring(last + 1, end).replace(/\.$/, '').trim()
}

/**
 * items   : all VocabItem[] for the topic (words + verbs, 150 total)
 * setIdx  : 0-based set index (0 = questions 1-25, 1 = 26-50, …)
 * setSize : 25
 */
export function generateFullQuiz(
  items: VocabItem[],
  setIdx: number,
  setSize = 25
): FQQuestion[] {
  const start    = setIdx * setSize
  const setItems = items.slice(start, start + setSize)
  const others   = items                             // pool for distractors

  return setItems.map((item, i): FQQuestion => {
    // Rotate types: vi-to-ko → ko-to-vi → sentence-blank → repeat
    const typeIdx = i % 3
    const type: FQType =
      typeIdx === 0 ? 'vi-to-ko' :
      typeIdx === 1 ? 'ko-to-vi' :
      'sentence-blank'

    // Pick 3 distractors that are different items
    const distractors = shuffle(others.filter(x => x.id !== item.id)).slice(0, 3)

    if (type === 'vi-to-ko') {
      return {
        type, item,
        prompt: item.vi,
        options: shuffle([item.ko, ...distractors.map(d => d.ko)]),
        correct: item.ko,
      }
    }

    if (type === 'ko-to-vi') {
      return {
        type, item,
        prompt: item.ko,
        options: shuffle([item.vi, ...distractors.map(d => d.vi)]),
        correct: item.vi,
      }
    }

    // sentence-blank: replace the target word in the Vietnamese sentence with ___
    const viSent = extractViSentence(item.usage)
    const koSent = extractKoSentence(item.usage)

    // Case-insensitive word replacement (Vietnamese first letter is often capitalised)
    const escaped = item.vi.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex   = new RegExp(escaped, 'i')
    const hasBlanked = regex.test(viSent)
    const sentence = hasBlanked
      ? viSent.replace(regex, '___')
      : viSent + ' (빈칸: ___)'   // fallback if word not found in sentence

    return {
      type, item,
      prompt: koSent || item.ko,  // show Korean hint
      sentence,
      options: shuffle([item.vi, ...distractors.map(d => d.vi)]),
      correct: item.vi,
    }
  })
}
