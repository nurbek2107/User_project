import React from 'react'

function About() {
  return (
    <>
      <section className='mb-[60px] mt-[80px] border-b pb-[40px]'>
        <div className='main-container grid grid-cols-2 items-center'>
          <div>
            <p className='text-5xl font-semibold'>
              About Skillbridge
            </p>
          </div>

          <div>
            <p className='text-sm text-[#59595a]'>
              Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className='main-container' style={{ marginBottom: `80px` }}>
        <div className='mb-[40px]'>
          <h1 className='text-4xl font-semibold'>Achievements</h1>
          <p className='text-sm text-[#59595a]'>
            Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px]' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px]' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px]' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px]' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About