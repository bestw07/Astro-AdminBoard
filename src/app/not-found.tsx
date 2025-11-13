import Link from 'next/link'
import React from 'react'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default function NotFound() {
  return (
    <main>
      <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: '2rem' }}>The page you are looking for does not exist.</p>
        <Link 
          href="/" 
          style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            textDecoration: 'none', 
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}

