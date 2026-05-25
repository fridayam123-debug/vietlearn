import {
  loadProgress, markAlphabetViewed, markToneViewed,
  isAlphabetComplete, isTonesComplete,
  isSessionUnlocked, markCardViewed, getSessionProgress
} from '../progress'

const ALPHABET_CHARS = ['a', 'ă', 'â', 'b', 'd', 'đ', 'e', 'ê', 'g', 'h',
  'i', 'k', 'l', 'm', 'n', 'o', 'ô', 'ơ', 'p', 'q', 'r', 's', 't',
  'u', 'ư', 'v', 'x', 'y']
const TONE_NAMES = ['ngang', 'huyền', 'sắc', 'hỏi', 'ngã', 'nặng']

beforeEach(() => localStorage.clear())

test('loadProgress returns empty progress when nothing saved', () => {
  const p = loadProgress()
  expect(p.viewedAlphabet).toEqual([])
  expect(p.viewedTones).toEqual([])
  expect(p.sessions).toEqual({})
})

test('markAlphabetViewed adds char to viewedAlphabet', () => {
  markAlphabetViewed('a')
  expect(loadProgress().viewedAlphabet).toContain('a')
})

test('isAlphabetComplete returns false when not all viewed', () => {
  ALPHABET_CHARS.slice(0, 5).forEach(markAlphabetViewed)
  expect(isAlphabetComplete(ALPHABET_CHARS)).toBe(false)
})

test('isAlphabetComplete returns true when all viewed', () => {
  ALPHABET_CHARS.forEach(markAlphabetViewed)
  expect(isAlphabetComplete(ALPHABET_CHARS)).toBe(true)
})

test('isSessionUnlocked returns false for word session when alphabet incomplete', () => {
  expect(isSessionUnlocked('school', 'word', 1, ALPHABET_CHARS, TONE_NAMES)).toBe(false)
})

test('isSessionUnlocked returns true for word session 1 when alphabet+tones complete', () => {
  ALPHABET_CHARS.forEach(markAlphabetViewed)
  TONE_NAMES.forEach(markToneViewed)
  expect(isSessionUnlocked('school', 'word', 1, ALPHABET_CHARS, TONE_NAMES)).toBe(true)
})

test('isSessionUnlocked returns false for session 2 when session 1 quiz not passed', () => {
  ALPHABET_CHARS.forEach(markAlphabetViewed)
  TONE_NAMES.forEach(markToneViewed)
  expect(isSessionUnlocked('school', 'word', 2, ALPHABET_CHARS, TONE_NAMES)).toBe(false)
})

test('markCardViewed tracks viewed card ids', () => {
  markCardViewed('school', 'word', 1, 'school-word-1-001')
  const sp = getSessionProgress('school', 'word', 1)
  expect(sp.viewed).toContain('school-word-1-001')
})
