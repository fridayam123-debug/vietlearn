import { VocabItem } from './types'

export type QuizQuestion = {
  type: 'multipleChoice' | 'typing'
  item: VocabItem
  prompt: string
  promptLang: 'vi' | 'ko'
  answerLang: 'vi' | 'ko'
  correct: string
  options: string[]
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

export function generateQuiz(items: VocabItem[]): QuizQuestion[] {
  return shuffle(items).map((item) => {
    const viToKo = Math.random() > 0.5
    const prompt = viToKo ? item.vi : item.ko
    const correct = viToKo ? item.ko : item.vi
    const answerLang: 'vi' | 'ko' = viToKo ? 'ko' : 'vi'
    const promptLang: 'vi' | 'ko' = viToKo ? 'vi' : 'ko'

    const distractors = shuffle(
      items.filter(x => x.id !== item.id).map(x => answerLang === 'ko' ? x.ko : x.vi)
    ).slice(0, 3)

    return {
      type: 'multipleChoice' as const,
      item,
      prompt,
      promptLang,
      answerLang,
      correct,
      options: shuffle([correct, ...distractors]),
    }
  })
}
