import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'
import React from 'react'

import './globals.css'

function RootLayout({ children }) {
  return (
    <>
      <div className=''>
        <Navbar />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default RootLayout