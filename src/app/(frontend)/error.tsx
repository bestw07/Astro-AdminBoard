'use client'

import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="home">
      <div className="content">
        <h1>Something went wrong!</h1>
        <p>{error.message || 'An unexpected error occurred'}</p>
        <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Try again
        </button>
      </div>
    </div>
  )
}

