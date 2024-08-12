"use client"
// material tailwind
import { Button } from '@material-tailwind/react'

// next imports
import Link from 'next/link'
import Image from 'next/image'

// css 
import './about.css'

function About() {
  return (
    <>
      <section className='mb-[60px] about_container mt-[80px] border-b pb-[40px]'>
        <div className='main-container grid md:grid-cols-2 items-center md:gap-[50px] lg:gap-0'>
          <div>
            <h1 className='text-5xl skillbridge font-semibold'>
              About Skillbridge
            </h1>
            <p className='text-sm about_skill_block mt-[30px] skillbridge text-[#59595a]'>
              Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
            </p>
          </div>

          <div>
            <p className='text-sm about_skill_none text-[#59595a]'>
              Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.
            </p>

            <div className='video-container'>
              <video src="/assets/video/about-course.mp4" autoPlay loop muted className="w-full h-full"></video>
            </div>
          </div>
        </div>
      </section>

      <section className='main-container' style={{ marginBottom: `200px` }}>
        <div className='mb-[40px]'>
          <h1 className='text-4xl font-semibold skillbridge'>Achievements</h1>
          <p className='text-sm text-[#59595a] skillbridge'>
            Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-4 sm:px-7'>
          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/krono.svg" alt="krono" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Trusted by Thousands</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/award.svg" alt="award" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Award-Winning Courses</h4>
            <p className='text-[#59595a] text-[16px]'>
              Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/positive.svg" alt="positive" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Positive Student Feedback</h4>
            <p className='text-[#59595a] text-[16px]'>
              We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/charging.svg" alt="charging" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Industry Partnerships</h4>
            <p className='text-[#59595a] text-[16px]'>
              We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies
            </p>
          </div>
        </div>
      </section>

      <section className='main-container' style={{ marginBottom: `100px` }}>
        <div className='mb-[40px]'>
          <h1 className='text-4xl font-semibold mb-[10px] skillbridge'>Our Goals</h1>
          <p className='text-sm text-[#59595a] skillbridge'>
            At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
            Through our carefully crafted courses, we aim to
          </p>
        </div>

        <div className='grid md:grid-cols-2 sm:sm:px-7 gap-4'>
          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/icon-container.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Provide Practical Skills</h4>
            <p className='text-[#59595a] text-[16px]'>
              We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/icon-container-1.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Foster Creative Problem-Solving</h4>
            <p className='text-[#59595a] text-[16px]'>
              We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/icon-container-2.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Promote Collaboration and Community</h4>
            <p className='text-[#59595a] text-[16px]'>
              We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.
            </p>
          </div>

          <div className='bg-white p-[25px] rounded-md'>
            <Image width={43} height={43} className='w-[43px] select-none' src="/assets/icon-container-3.png" alt="icon" />
            <h4 className='text-[20px] font-medium mt-[22px] mb-[8px]'>Stay Ahead of the Curve</h4>
            <p className='text-[#59595a] text-[16px]'>
              The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.
            </p>
          </div>
        </div>
      </section>

      <section className='relative bg-white last_sec rounded-md main-container flex flex-wrap justify-between lg:items-center md:items-start md:flex-col lg:flex-row p-[60px]' style={{ marginBottom: `100px` }}>
        <div className='z-50 md:mb-[50px]'>
          <h1 className='text-[32px] font-semibold leading-[40px] mb-[15px]'>
            <span className='text-[#FF9500]'>Together</span>, lets shape the future of digital <br /> innovation
          </h1>
          <p className='text-[16px] text-[#4c4c4d]'>
            Join us on this exciting learning journey and unlock your potential in design and development.
          </p>
        </div>

        <Image
          width={330}
          height={200}
          src="/assets/rectangle.svg"
          alt="rectangle"
          className='absolute absolute_img z-0 top-0 md:hidden sm:hidden lg:block lg:right-[160px]'
        />

        <div className='z-10'>
          <Link href={`/courses`}>
            <Button className='bg-[#FF9500]'>
              Join Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default About