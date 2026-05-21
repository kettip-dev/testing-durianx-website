import About from '@/common/module/About'
import React from 'react'


export const metadata = {
  title: 'About Us - DurianX',
  description: 'About Us',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <About />
    </div>
  )
}

export default page
