import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'
import React from 'react'

import '../globals.css'

function layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <main className='w-full'>
          {children}
        </main> 
      </div>
      <Footer />
    </>
  )
}

export default layout