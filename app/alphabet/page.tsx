'use client'
import { alphabet, ALPHABET_CHARS } from '@/data/alphabet'
import { AlphabetCard } from '@/components/AlphabetCard'
import { useProgress } from '@/hooks/useProgress'
import Link from 'next/link'

export default function AlphabetPage() {
  const { progress, viewAlphabet, alphabetDone } = useProgress()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href="/" className="text-2xl">←</Link>
        <h1 className="font-bold text-lg">베트남어 알파벳</h1>
        <span className="ml-auto text-sm text-gray-500">
          {progress.viewedAlphabet.length}/{ALPHABET_CHARS.length}
        </span>
      </div>
      {alphabetDone && (
        <div className="mx-4 mt-4 p-3 bg-green-100 text-green-800 rounded-xl text-center font-medium text-sm">
          ✅ 알파벳 완료! 이제 성조를 학습하세요.
        </div>
      )}
      <div className="grid grid-cols-3 gap-3 p-4">
        {alphabet.map(letter => (
          <div key={letter.char} className="relative">
            {progress.viewedAlphabet.includes(letter.char) && (
              <div className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">✓</div>
            )}
            <AlphabetCard
              letter={letter}
              onViewed={() => viewAlphabet(letter.char)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
