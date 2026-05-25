import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VietLearn',
  description: '한국인을 위한 베트남어 학습 앱',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'VietLearn' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <script dangerouslySetInnerHTML={{
          __html: `if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js') }`
        }} />
      </head>
      <body className="bg-white text-gray-900 max-w-md mx-auto min-h-screen">
        {children}
      </body>
    </html>
  )
}
