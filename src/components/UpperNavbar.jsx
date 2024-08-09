import Link from 'next/link'
import React from 'react'

function UpperNavbar() {
    return (
        <Link href="/">
            <div className="responsive_navbar">
                Free Courses 🌟 Sale Ends Soon, Get It Now
                <img src="../assets/Arrow.gif" width="20px" alt="" />
            </div>
        </Link>
    )
}

export default UpperNavbar