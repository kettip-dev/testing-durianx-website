import Blog from '@/common/module/Blog'
import React from 'react'

export const metadata = {
  title: 'Blog - DurianX',
  description: 'Blog',
  
}

const Blogpost = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <Blog/>
    </div>
  )
}

export default Blogpost
