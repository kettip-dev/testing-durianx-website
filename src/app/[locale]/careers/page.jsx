import CareersPage from '@/common/module/Careers'
import React from 'react'

export const metadata = {
  title: 'Careers - DurianX',
  description: "Join the DurianX team. We are building Cambodia's most trusted super-app and are looking for passionate people who believe in empowering local communities through technology.",
}

const page = () => {
  return (
    <div className='mt-20 flex justify-center'>
      <CareersPage />
    </div>
  )
}

export default page
