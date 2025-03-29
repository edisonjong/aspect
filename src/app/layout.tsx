import React from 'react'
import type { Metadata } from 'next'
import { Geist } from 'geist/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aspect - Modern Magazine Theme',
  description: 'A modern magazine theme with grid layout and functional sidebar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={Geist.className}>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <div className="flex min-h-screen">
          {/* Sidebar will be added here */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
} 