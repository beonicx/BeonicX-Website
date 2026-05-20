import ContactUs from '@/components/contact/contactUs/ContactUs'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
       <ContactUs/>
       <Footer/>
    </div>
  )
}

export default page
