import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import AppSuite from '../AppSuite'
import Solution from '../Solution'
import Feature from '../Feature/Feature'
import DownloadApp from '../DownloadApp'

const Homepage = () => {
  return (
    <div>
      {/* Hero — no scroll trigger, it's above the fold */}
      <Hero />

      {/* AppSuite — stagger children on scroll */}
      <section data-section data-gsap="fade-up">
        <AppSuite />
      </section>

      {/* Feature — fade from left */}
      <section data-section data-gsap="fade-up">
        <Feature />
      </section>

      {/* Service — clip reveal */}
      <section data-section data-gsap="fade-up">
        <Service />
      </section>

      {/* Solution — scale in */}
      <section data-section data-gsap="scale-in">
        <Solution />
      </section>

      {/* Download — fade from right */}
      <section data-section data-gsap="fade-right">
        <DownloadApp />
      </section>
    </div>
  )
}

export default Homepage
