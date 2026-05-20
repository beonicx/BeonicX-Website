import Nextjs from '@/components/technology/nextjs/Nextjs'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Nextjs/>
      <Footer/>
    </div>
  )
}

export default page
