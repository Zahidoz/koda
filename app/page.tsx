import React from 'react'
import Header from './components/Header'

export default function HomePage() {
  return (
    <div className="relative">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-20" />

    </div>
  )
}
