import { generateQuiz } from '../quiz'
import { VocabItem } from '../types'

const items: VocabItem[] = Array.from({ length: 25 }, (_, i) => ({
  id: `item-${i}`,
  topic: 'school' as const,
  session: 1,
  type: 'word' as const,
  vi: `từ ${i}`,
  ko: `단어 ${i}`,
  usage: '예시 사용법',
}))

test('generateQuiz returns 25 questions', () => {
  const q = generateQuiz(items)
  expect(q).toHaveLength(25)
})

test('each question has 4 options', () => {
  const q = generateQuiz(items)
  q.forEach(question => expect(question.options).toHaveLength(4))
})

test('correct answer is always in options', () => {
  const q = generateQuiz(items)
  q.forEach(question => {
    expect(question.options).toContain(question.correct)
  })
})

test('question types are multipleChoice or typing', () => {
  const q = generateQuiz(items)
  q.forEach(question => {
    expect(['multipleChoice', 'typing']).toContain(question.type)
  })
})
