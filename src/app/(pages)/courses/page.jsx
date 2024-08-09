"use client"
import React from 'react'
import Courses_cards from "@/components/Courses_cards";
function Courses() {
  return (
    <>
    <section className='mb-[60px] mt-[80px] border-b pb-[40px]'>
    <div className='main-container p-4'>
      <h1 className='text-5xl font-semibold'>Kurslar</h1>
      <div>
        <Courses_cards/>
      </div>
    </div>
    </section>
    </>
  )
}

export default Courses