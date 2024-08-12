"use client"
import React, { useState } from 'react'
import "../login/login.css"
function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [id, setId] = useState(0);

    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
    }
    let router = [
        {
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum totam est amet, tempora velit quia quibusdam.",
            name: "Sarah L",
            imgSrc: "https://www.adelaidearb.com.au/wp-content/uploads/pimgpsh_fullsize_distr.jpg"
        },
        {
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum natus debitis ut qui est iusto a repudiandae alias illum deserunt!",
            name: "John D",
            imgSrc: "//avatars.mds.yandex.net/i?id=70732c2551c4e30ac23b7c70cabb082e_l-4580242-images-thumbs&ref=rim&n=13&w=960&h=960"
        },
        {
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi iusto ea sunt distinctio nemo veniam, ipsum in quae.",
            name: "Emily R",
            imgSrc: "https://www.ewparik.com/upload/resize_cache/iblock/3ca/900_900_1fa72c7c719b9bf5d96a98e09d4c1005a/3cacc117a06f8c12631514bbdbe5e236.jpg"
        }
    ];

    function nextSlide() {
        setId((prevId) => (prevId + 1) % router.length);
    }

    function prevSlide() {
        setId((prevId) => (prevId - 1 + router.length) % router.length);
    }
  return (
    <div>
         <div className='div-1 max-w-[1200px] mx-auto'>
            <div className='div-2'>
                <div>
                    <h2 className='font-[500] text-[28px] text-[#262626]'>Students Testimonials</h2>
                    <p className='text-[#59595A] font-[400] text-[14px] max-w-[90%] tracking-[0.9px] mt-[10px]'>
                        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                    </p>
                </div>
                <div className="bg-white rounded-[5px] mt-[45px]">
                    <p className="p-[30px] first-letter:text-[15px] tracking-[0.9px] border-b-[1px] border-solid">
                        {router[id].text}
                    </p>
                    <div className="flex justify-between py-[20px] px-[30px]">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-[40px] h-[40px] rounded-[10px]"
                                src={router[id].imgSrc}
                                alt={router[id].name}
                            />
                            <p className="font-[700] text-[15px] text-[#333]">{router[id].name}</p>
                        </div>
                        <button className="btn">Read Full Story</button>
                    </div>
                </div>
                <div className="w-full flex justify-end gap-3 mt-[22px]">
                    <button onClick={prevSlide} className="btn bg-white text-[50px]">
                        <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M15.5 6.5C15.5 7.12132 14.9963 7.625 14.375 7.625H4.41812L7.65475 10.5641C8.10262 10.9947 8.11658 11.7069 7.68594 12.1547C7.25529 12.6026 6.54312 12.6166 6.09525 12.1859L0.845252 7.31094C0.624665 7.09883 0.5 6.80602 0.5 6.5C0.5 6.19398 0.624665 5.90117 0.845253 5.68906L6.09525 0.814064C6.54312 0.383422 7.25529 0.397386 7.68594 0.845254C8.11658 1.29312 8.10262 2.0053 7.65475 2.43594L4.41812 5.375L14.375 5.375C14.9963 5.375 15.5 5.87868 15.5 6.5Z"
                                fill="#262626"
                            />
                        </svg>
                    </button>
                    <button onClick={nextSlide} className="btn bg-white text-[50px]">
                        <svg
                            width="16"
                            height="13"
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.5 6.5C0.5 5.87868 1.00368 5.375 1.625 5.375H11.5819L8.34525 2.43594C7.89738 2.0053 7.88342 1.29312 8.31406 0.845254C8.74471 0.397386 9.45688 0.383421 9.90475 0.814064L15.1547 5.68906C15.3753 5.90117 15.5 6.19398 15.5 6.5C15.5 6.80602 15.3753 7.09883 15.1547 7.31094L9.90475 12.1859C9.45688 12.6166 8.74471 12.6026 8.31406 12.1547C7.88342 11.7069 7.89738 10.9947 8.34525 10.5641L11.5819 7.625H1.625C1.00368 7.625 0.5 7.12132 0.5 6.5Z"
                                fill="#262626"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='div-3 bg-white'>
                <h2 className='font-[600] text-[40px] text-[#262626]'>Sign Up</h2>
                <p className='text-[14px] text-[#4C4C4D] mt-[10px] tracking-[1px]'>Create an account to unlock exclusive features.</p>
                <form action="">
                    <div className='text-start mt-[19px]'>
                        <label htmlFor="email">Full Name</label>
                        <input 
                            className='mt-[5px] input input-bordered input-warning w-full' 
                            type="email" 
                            placeholder='Enter your Name' 
                        />
                    </div>
                    <div className='text-start mt-[19px]'>
                        <label htmlFor="email">Email</label>
                        <input 
                            className='mt-[5px] input input-bordered input-warning w-full' 
                            type="email" 
                            placeholder='Enter your Email' 
                        />
                    </div>
                    <div className='text-start mt-[20px]'>
                        <label htmlFor="password">Password</label>
                        <div className='mt-[5px] flex items-center border-[1px] input input-bordered input-warning w-full'>
                            <input
                                className='focus:outline-none h-[55px]  w-full'
                                type={passwordVisible ? "text" : "password"}
                                placeholder='Enter your Password'
                            />
                            <svg 
                                onClick={togglePasswordVisibility}  
                                className='cursor-pointer mr-0 z-30' 
                                width="24" 
                                height="25" 
                                viewBox="0 0 24 25" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12.001 15.5C13.6578 15.5 15.001 14.1569 15.001 12.5C15.001 10.8431 13.6578 9.5 12.001 9.5C10.3441 9.5 9.00098 10.8431 9.00098 12.5C9.00098 14.1569 10.3441 15.5 12.001 15.5Z" fill="#4C4C4D"/>
                                <path 
                                    fillRule="evenodd" 
                                    clipRule="evenodd" 
                                    d="M1.32439 11.9467C2.81164 7.47571 7.02889 4.25 12.0015 4.25C16.9718 4.25 21.1874 7.47271 22.6765 11.9405C22.7969 12.3015 22.797 12.6922 22.6769 13.0533C21.1896 17.5243 16.9723 20.75 11.9997 20.75C7.02945 20.75 2.81381 17.5273 1.32472 13.0595C1.20437 12.6985 1.20426 12.3078 1.32439 11.9467ZM17.251 12.5C17.251 15.3995 14.9005 17.75 12.001 17.75C9.10148 17.75 6.75098 15.3995 6.75098 12.5C6.75098 9.6005 9.10148 7.25 12.001 7.25C14.9005 7.25 17.251 9.6005 17.251 12.5Z" 
                                    fill="#4C4C4D"
                                />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-[15px] mt-[10px]'>
                            <div className='div-4 flex font-[400] text-[14px] text-[#656567]  items-center gap-2'><input value={false} type="checkbox"  className="checkbox checkbox-warning" />
                            <p >I agree with </p><a href="">Termis of Use</a><p>and</p><a href="">Privacy Policy</a></div>
                        </div>
                        <button className='mt-[10px] btn text-[15px] w-full h-[40px] bg-[#FF9500] border-[#FF9500] text-[#fff] hover:bg-[#ff9500a3] hover:border-[#ff9500a3]'>Login</button>
                        <div className='border-b-[1px] mt-[24px] flex justify-center rounded-[0] '><p className=' mb-[-12px] bg-white px-2'>OK</p></div>
                        <button className='mt-[30px] btn w-full  text-[14px]'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g clipPath="url(#clip0_152_4476)">
                        <path d="M23.7643 12.2764C23.7643 11.4607 23.6982 10.6406 23.5571 9.83807H12.2383V14.4591H18.72C18.451 15.9494 17.5868 17.2678 16.3213 18.1056V21.1039H20.1883C22.4591 19.0139 23.7643 15.9274 23.7643 12.2764Z" fill="#4285F4"/>
                        <path d="M12.2391 24.0008C15.4756 24.0008 18.205 22.9382 20.1936 21.1039L16.3266 18.1055C15.2507 18.8375 13.8618 19.252 12.2435 19.252C9.11291 19.252 6.45849 17.1399 5.50607 14.3003H1.51562V17.3912C3.55274 21.4434 7.70192 24.0008 12.2391 24.0008Z" fill="#34A853"/>
                        <path d="M5.50082 14.3003C4.99816 12.8099 4.99816 11.1961 5.50082 9.70575V6.61481H1.51478C-0.187219 10.0056 -0.187219 14.0004 1.51478 17.3912L5.50082 14.3003Z" fill="#FBBC04"/>
                       <path d="M12.2391 4.74966C13.9499 4.7232 15.6034 5.36697 16.8425 6.54867L20.2685 3.12262C18.0991 1.0855 15.2198 -0.034466 12.2391 0.000808666C7.70192 0.000808666 3.55274 2.55822 1.51562 6.61481L5.50166 9.70575C6.44967 6.86173 9.1085 4.74966 12.2391 4.74966Z" fill="#EA4335"/>
                            </g>
                          <defs>
                          <clipPath id="clip0_152_4476">
                        <rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>Login with Google</button>
<div className='flex '>

<a className='text-center text-[15px] w-full mt-[10px]' href="">Don’t have an account? Sign Up </a>
</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup