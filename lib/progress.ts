import { AppProgress, SessionProgress, TopicId } from './types'

const KEY = 'vietlearn_progress'

export function loadProgress(): AppProgress {
  if (typeof window === 'undefined') return empty()
  try {
    return JSON.parse(localStorage.getItem(KEY) || 'null') ?? empty()
  } catch { return empty() }
}

function empty(): AppProgress {
  return { viewedAlphabet: [], viewedTones: [], sessions: {} }
}

export function saveProgress(p: AppProgress): void {
  localStorage.setItem(KEY, JSON.stringify(p))
}

export function markAlphabetViewed(char: string): void {
  const p = loadProgress()
  if (!p.viewedAlphabet.includes(char)) {
    p.viewedAlphabet.push(char)
    saveProgress(p)
  }
}

export function markToneViewed(name: string): void {
  const p = loadProgress()
  if (!p.viewedTones.includes(name)) {
    p.viewedTones.push(name)
    saveProgress(p)
  }
}

export function isAlphabetComplete(allChars: string[]): boolean {
  const p = loadProgress()
  return allChars.every(c => p.viewedAlphabet.includes(c))
}

export function isTonesComplete(allTones: string[]): boolean {
  const p = loadProgress()
  return allTones.every(t => p.viewedTones.includes(t))
}

function sessionKey(topic: TopicId, type: 'word' | 'verb', session: number) {
  return `${topic}-${type}-${session}`
}

export function getSessionProgress(topic: TopicId, type: 'word' | 'verb', session: number): SessionProgress {
  const p = loadProgress()
  return p.sessions[sessionKey(topic, type, session)] ?? { viewed: [], quizPassed: false, lastScore: 0 }
}

export function markCardViewed(topic: TopicId, type: 'word' | 'verb', session: number, id: string): void {
  const p = loadProgress()
  const k = sessionKey(topic, type, session)
  if (!p.sessions[k]) p.sessions[k] = { viewed: [], quizPassed: false, lastScore: 0 }
  if (!p.sessions[k].viewed.includes(id)) p.sessions[k].viewed.push(id)
  saveProgress(p)
}

export function markQuizPassed(topic: TopicId, type: 'word' | 'verb', session: number, score: number): void {
  const p = loadProgress()
  const k = sessionKey(topic, type, session)
  if (!p.sessions[k]) p.sessions[k] = { viewed: [], quizPassed: false, lastScore: 0 }
  p.sessions[k].quizPassed = score >= 20
  p.sessions[k].lastScore = score
  saveProgress(p)
}

export function isSessionUnlocked(
  topic: TopicId,
  type: 'word' | 'verb',
  session: number,
  allChars: string[],
  allTones: string[]
): boolean {
  if (!isAlphabetComplete(allChars) || !isTonesComplete(allTones)) return false
  if (session === 1) return true
  return getSessionProgress(topic, type, session - 1).quizPassed
}
