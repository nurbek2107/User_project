import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function UpperNavbar() {
    return (
        <Link href="/">
            <div className="responsive_navbar">
                Free Courses 🌟 Sale Ends Soon, Get It Now
                <Image 
                    src="/assets/Arrow.gif" // Corrected path
                    width={20} // Numeric value
                    height={20} // Numeric value
                    alt="Arrow" 
                />
            </div>
        </Link>
    )
}

export default UpperNavbar
