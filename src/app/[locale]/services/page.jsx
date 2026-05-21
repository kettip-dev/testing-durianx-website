import ServicePage from '@/common/module/Service/component/ServicePage'
import React from 'react'


export const metadata = {
  title: 'Services - DurianX',
  description: 'Services',
  
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <ServicePage />
    </div>
  )
}

export default page
