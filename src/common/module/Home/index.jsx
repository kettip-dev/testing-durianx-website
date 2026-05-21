import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import AppSuite from '../AppSuite'
import Solution from '../Solution'
import Feature from '../Feature/Feature'
import DownloadApp from '../DownloadApp'
import Interest from '../EndSection/Interest'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AppSuite />
      <Feature />
      <Service />
      <Solution />
      <DownloadApp />
      {/* <Interest /> */}
    </div>
  )
}

export default Homepage
