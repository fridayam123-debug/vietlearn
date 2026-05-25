'use client'
import { useState, useCallback } from 'react'
import {
  loadProgress, markAlphabetViewed, markToneViewed,
  markCardViewed, markQuizPassed, isAlphabetComplete,
  isTonesComplete, isSessionUnlocked, getSessionProgress
} from '@/lib/progress'
import { AppProgress, TopicId } from '@/lib/types'
import { ALPHABET_CHARS, TONE_NAMES } from '@/data/alphabet'

export function useProgress() {
  const [, setTick] = useState(0)
  const refresh = useCallback(() => setTick(t => t + 1), [])

  const progress: AppProgress = loadProgress()

  const viewAlphabet = useCallback((char: string) => {
    markAlphabetViewed(char); refresh()
  }, [refresh])

  const viewTone = useCallback((name: string) => {
    markToneViewed(name); refresh()
  }, [refresh])

  const viewCard = useCallback((topic: TopicId, type: 'word' | 'verb', session: number, id: string) => {
    markCardViewed(topic, type, session, id); refresh()
  }, [refresh])

  const passQuiz = useCallback((topic: TopicId, type: 'word' | 'verb', session: number, score: number) => {
    markQuizPassed(topic, type, session, score); refresh()
  }, [refresh])

  const alphabetDone = isAlphabetComplete(ALPHABET_CHARS)
  const tonesDone = isTonesComplete(TONE_NAMES)

  const unlocked = useCallback((topic: TopicId, type: 'word' | 'verb', session: number) =>
    isSessionUnlocked(topic, type, session, ALPHABET_CHARS, TONE_NAMES),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [progress])

  const sessionProg = useCallback((topic: TopicId, type: 'word' | 'verb', session: number) =>
    getSessionProgress(topic, type, session),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [progress])

  return { progress, alphabetDone, tonesDone, viewAlphabet, viewTone, viewCard, passQuiz, unlocked, sessionProg }
}
