

import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Good Afternoon Creative',
  description: 'Good Afternoon Creative is an Istanbul based design & strategy agency.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="items-center justify-center flex">
      <body className="max-w-[1440px] w-full">{children}</body>
    </html>
  )
}
