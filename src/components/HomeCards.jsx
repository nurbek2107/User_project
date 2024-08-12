import React from 'react';
import "./HomeCards.css"
function HomeCards() {
  return (
    <>
      <div className="main-container shadow-md rounded-xl h-[500px]">
      <main className="flex items-end  text-[35px] font-bold  ">
      <p>Yangi imkoniyatlarni oching va</p>
      <section className="animation ">
      <div className="first"><div>Backend</div></div>
      <div className="second"><div>Frontend</div></div>
      <div className="third"><div>Flatter</div></div>
      </section>
  
      </main>
      <p className='text-[35px] font-bold'> dasturlashni o‘rganing</p>
      </div>
    </>
  )
}

export default HomeCards;
