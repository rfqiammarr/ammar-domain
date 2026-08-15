import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Approach from '../components/Approach'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [hash])

  return (
    <>
      <Hero />
      <Services />
      <Approach />
      <Projects />
      <Contact />
    </>
  )
}
