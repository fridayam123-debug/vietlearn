import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VietLearn',
  description: '한국인을 위한 베트남어 학습 앱',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'VietLearn' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <head>
        <meta name="theme-color" content="#dc2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
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
