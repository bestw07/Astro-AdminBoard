// src/app/(payload)/admin/layout.tsx
import React from 'react'
import './styles.css'// adjust if needed
import ClientWrapper from './client-wrapper'

export const metadata = {
  title: 'Payload Admin',
  description: 'Admin panel for Payload CMS',
}

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
}
