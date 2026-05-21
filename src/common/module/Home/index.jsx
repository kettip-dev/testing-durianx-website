import React from 'react'
import Hero from '../Hero'
import Service from '../Service'
import AppSuite from '../AppSuite'
import Solution from '../Solution'
import Blog from '../Blog'
import Feature from '../Feature/Feature'
import Interest from '../EndSection/Interest'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <AppSuite />
      <Feature />
      <Service />
      <Solution />
      <Blog/>
      <Interest />
    </div>
  )
}

export default Homepage
