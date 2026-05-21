import Contactus from '@/common/module/Contact'
import React from 'react'

export const metadata = {
  title: 'Contact Us - DurianX',
  description: 'Contact Us',
  
}

const Contact = () => {
  return (
    <div className='flex justify-center  w-full'>
      <Contactus />
    </div>
  )
}

export default Contact
