import React from 'react'
function Error() {
  return (
    <div className='h-[60vh] flex flex-col justify-center my-[70px]'>
    <div className='main-container h-[600px]  flex  items-center  '>
        <div className='w-[50%]'>
            <h2 className='text-[66px] font-[600] text-[#919090] lin'>Go Home,<br /> You’re Drunk!</h2>
            <button className='btn bg-[#ff9500b4] mt-[50px]  rounded-[8px] font-[500] text-[25px] text-[#fff] h-[60px] w-[280px] flex flex-col justify-center pt-[5px] items-center'>BACK TO HOME</button>
        </div>
        <img className='w-[50%] ' src="./assets/errors.svg" alt="Error Graphic" />
    </div>
    </div>
  )
}

export default Error
