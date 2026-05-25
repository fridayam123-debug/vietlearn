'use client'
import { useParams } from 'next/navigation'
import { AudioButton } from '@/components/AudioButton'
import { TopicId } from '@/lib/types'
import Link from 'next/link'
import { conversations } from '@/data/conversations'

export default function ConversationPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topicConvs = conversations.filter(c => c.topic === topicId as TopicId)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3 z-10">
        <Link href={`/topic/${topicId}`} className="text-2xl">←</Link>
        <h1 className="font-bold text-lg">회화</h1>
        <span className="ml-auto text-sm text-gray-500">{topicConvs.length}개</span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {topicConvs.map(conv => (
          <div key={conv.id} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-red-600 px-4 py-3">
              <p className="text-white font-bold">{conv.title}</p>
            </div>
            <div className="p-4 flex flex-col gap-4">
              {conv.lines.map((line, i) => (
                <div key={i} className={`flex gap-3 ${line.speaker === 'B' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {line.speaker}
                  </div>
                  <div className={`flex-1 flex flex-col gap-1 ${line.speaker === 'B' ? 'items-end' : 'items-start'}`}>
                    <div className={`rounded-2xl p-3 max-w-xs ${line.speaker === 'A' ? 'bg-gray-100' : 'bg-red-50'}`}>
                      <p className="font-medium text-gray-900">{line.vi}</p>
                      <p className="text-sm text-gray-500 mt-1">{line.ko}</p>
                    </div>
                    <AudioButton text={line.vi} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
