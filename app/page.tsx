import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Features />
    </div>
  )
}
