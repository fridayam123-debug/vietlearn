export type TopicId =
  | 'school' | 'food' | 'animals' | 'family' | 'daily'
  | 'numbers-time' | 'travel' | 'cooking' | 'mart'
  | 'electronics' | 'hotel' | 'real-estate' | 'business'

export interface Topic {
  id: TopicId
  nameKo: string
  nameVi: string
  icon: string
}

export interface AlphabetLetter {
  char: string
  pronunciationKo: string
  mouthShape: string
  example: string
  exampleMeaning: string
}

export interface Tone {
  name: string
  mark: string
  descriptionKo: string
  example: string
  exampleMeaning: string
}

export interface VocabItem {
  id: string
  topic: TopicId
  session: number
  type: 'word' | 'verb'
  vi: string
  ko: string
  usage: string
}

export interface ConversationLine {
  speaker: 'A' | 'B'
  vi: string
  ko: string
}

export interface Conversation {
  id: string
  topic: TopicId
  index: number
  title: string
  lines: ConversationLine[]
}

export interface SessionProgress {
  viewed: string[]
  quizPassed: boolean
  lastScore: number
}

export interface AppProgress {
  viewedAlphabet: string[]
  viewedTones: string[]
  sessions: Record<string, SessionProgress>
}
