import './globals.css'
import { Rubik } from 'next/font/google'

const inter = Rubik({weight: ["300", "400", "500", "600", "700"],  subsets: ['latin'] })

export const metadata = {
  title: 'David Asaolu - Software Engineer & Technical Writer',
  description: 'Software Engineer & Technical Writer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
