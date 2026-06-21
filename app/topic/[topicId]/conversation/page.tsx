'use client'
import { useParams } from 'next/navigation'
import { AudioButton } from '@/components/AudioButton'
import { TopicId } from '@/lib/types'
import Link from 'next/link'
import { conversations } from '@/data/conversations'

const TOPICS = ['school','food','animals','family','daily','numbers-time','travel','cooking','mart','electronics','hotel','real-estate','business']

export function generateStaticParams() {
  return TOPICS.map(topicId => ({ topicId }))
}

export default function ConversationPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topicConvs = conversations.filter(c => c.topic === topicId as TopicId)

  return (
    <>
      <div className="page-header">
        <Link href={`/topic/${topicId}`} className="back-link" style={{ margin: 0 }}>←</Link>
        <h1>회화</h1>
        <span className="ph-count">{topicConvs.length}개</span>
      </div>

      <div className="app" style={{ paddingTop: 20 }}>
        <div className="conv-screen">
          {topicConvs.map(conv => (
            <div key={conv.id} className="conv-group">
              <div className="conv-group-title">{conv.title}</div>
              {conv.lines.map((line, i) => (
                <div key={i} className="conv-line">
                  <div className="cl-speaker">{line.speaker}</div>
                  <div className="cl-body">
                    <div className="vi">{line.vi}</div>
                    <div className="ko">{line.ko}</div>
                  </div>
                  <AudioButton text={line.vi} size="sm" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
