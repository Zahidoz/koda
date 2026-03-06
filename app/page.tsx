import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Course from './components/Course'
import Teacber from './components/Teacber'
import Pricing from './components/Pricing'

export default function HomePage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Features />
      <Course />
      <Teacber/>
      <Pricing />
    </div>
  )
}
