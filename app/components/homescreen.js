import React from 'react'
import Image from 'next/image'

const homescreen = () => {
  return (
    <section id='home' className='flex gap-20 px-[9%] max-[800px]:px-[5%] max-[985px]:px-[10%] max-[1050px]:px-[6%] h-auto relative mx-auto pt-[80px]'>
        <div className='w-[56.7%] my-14 relative z-10 max-[985px]:w-full flex flex-col gap-8'>
            <div className='text-[50px] leading-[60px] font-bold max-[550px]:text-[45px]'>
            <h1>HI, I'M YASH!</h1>
            <h1 className='text-[#55E6A5] font-extrabold'>WEB DEVELOPER</h1>
            </div>

            <p className='text-[#b2b2b2] w-[95%] leading-7 font-medium'>I'm a dedicated and passionate full stack web developer focused on building websites that are both beautiful and functional. I love finding solutions to challenges and creating online experiences that are easy to use and enjoyable.</p>

            <div className='flex my-10 gap-8 max-[550px]:flex-wrap'>
                <button className='bg-[#55E6A5] topbtn  p-[22px] px-9 text-base gap-2 flex items-center text-black font-medium'>Download CV <img className='w-6' src="svgs/download.svg" alt="" /></button>
                <button onClick={()=>{document.querySelector("#about").scrollIntoView({"behavior":'smooth',block:"start"})}} className='flex hover:text-[#55e6a5] transition-colors gap-2 items-center text-lg'>
                    <img className='w-14' src="svgs/play.svg" alt="play" />
                    Get Started
                </button>
            </div>
        </div>

        <div className='p-9 profile-pic w-[43.3%] max-[985px]:hidden relative z-10 my-8 max-[1050px]:flex max-[1050px]:items-center max-[1050px]:after:top-[16%]'>
            <img className='relative z-10 w-[25rem] max-w-full' alt="prof" src="images/profile.png" />
        </div>
        <div className='home-background'></div>
    </section>
  )
}

export default homescreen