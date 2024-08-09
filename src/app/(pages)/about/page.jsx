"use client";
import { Button } from '@material-tailwind/react'
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

      <section className='main-container' style={{ marginBottom: `200px` }}>
        <div className='mb-[40px]'>
          <h1 className='text-4xl font-semibold'>Achievements</h1>
          <p className='text-sm text-[#59595a]'>
            Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>
        </div>
      </section>

      <section className='main-container' style={{ marginBottom: `80px` }}>
        <div className='mb-[40px]'>
          <h1 className='text-4xl font-semibold mb-[10px]'>Our Goals</h1>
          <p className='text-sm text-[#59595a]'>
            At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to
          </p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/icon-container.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Provide Practical Skills</h4>
            <p className='text-[#59595a] text-[16px]'>
              We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/icon-container-1.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Foster Creative Problem-Solving</h4>
            <p className='text-[#59595a] text-[16px]'>
              We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/icon-container-2.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Promote Collaboration and Community</h4>
            <p className='text-[#59595a] text-[16px]'>
              We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <img className='w-[43px] select-none' src="../assets/icon-container-3.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Stay Ahead of the Curve</h4>
            <p className='text-[#59595a] text-[16px]'>
              The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.
            </p>
          </div>
        </div>
      </section>

      <section className='relative bg-white rounded-md main-container flex flex-wrap justify-between items-center p-[60px]' style={{ marginBottom: `100px` }}>
        <div className='z-10'>
          <h1 className='text-[32px] font-semibold leading-[40px] mb-[15px]'>
            <span className='text-[#FF9500]'>Together</span>, let's shape the future of digital <br /> innovation
          </h1>
          <p className='text-[16px] text-[#4c4c4d]'>
            Join us on this exciting learning journey and unlock your potential in design and development.
          </p>
        </div>

        <img className='absolute z-0 right-[180px]' src="../assets/rectangle.svg" alt="rectangle" />

        <div>
          <Button className='bg-[#FF9500]'>
            Join Now
          </Button>
        </div>
      </section>
    </>
  )
}

export default About