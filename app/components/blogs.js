"use client"
import React from 'react'
import { useState ,useEffect} from 'react';
import Link from 'next/link';


const blogs = () => {
    const [blogs, setBlogs] = useState([
        {title:"My Own Portfolio",no_of_comment:0,date:"October 23, 2024",keyword:"portfolio"},
        {title:"Innovative Linktree clone",no_of_comment:0,date:"October 23, 2024",keyword:"bittree"},
        {title:"Advanced Linktree clone",no_of_comment:0,date:"October 23, 2024",keyword:"advanced-bittree"},
    ])
    
useEffect(() => {
  
}, [])

    
    const handleMouseEnter = async () => {
        document.querySelector(".outlined-text").style.animationPlayState = "paused"
      };
      const handleMouseLeave = async () => {
        document.querySelector(".outlined-text").style.animationPlayState = "running"
        
      };

      
  return (
    <section className='w-full' >
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='w-full uppercase overflow-hidden'><div className='bg-[#55E6A5] w-fit max-[550px]:text-[35px] max-[550px]:py-10 max-[550px]:leading-[35px] -translate-x-1/2 py-16 max-[985px]:py-7 outlined-text text-[110px] max-[985px]:text-[66px] max-[985px]:leading-[66px] leading-[110px] font-bold text-nowrap'>development * ai * design * world * responsive * development * ai * design * world * responsive *&nbsp;</div></div>
        <div id='blog' className='bg-black max-[550px]:pt-20 py-28 p-[9%] max-[550px]:p-[5%] max-[750px]:p-[9%] max-[1050px]:p-[6%]'>
        <div className='text-white px-2 gap-4 w-2/3 max-[550px]:w-auto max-[985px]:w-full tracking-tight h-auto flex flex-col items-start'>
                    <h1 className='text-[#55e6a5] betaheading text-xl font-medium uppercase'>MY blogs</h1>
                    <h1 className='text-white betaheading text-start max-[550px]:text-[30px] max-[375px]:text-[26px] font-semibold text-[38px]'>Transforming Vision into Digital Masterpieces</h1>
                </div>
                <div className='flex gap-8 max-[550px]:gap-0 max-[750px]:gap-4 w-full max-[1150px]:flex-wrap  max-[750px]:flex-col gap-y-12'>
{blogs.map((box,index)=>{
return <Link href={`${box.keyword}`} key={index} className='w-full sideslider max-[750px]:w-full max-[1150px]:w-[calc(50%-16px)] cursor-pointer blogbox'>
<div className='w-full translate-y-16 overflow-hidden'><img className='w-full h-[320px] andarimage object-cover' src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/list_2.jpg" alt="" /></div>
<div className="textare z-50 bg-[#09101A] mx-auto w-[92%] p-8 pt-11 relative">
    <div className="datebox p-8 bg-[#55E6A5] py-3 font-medium text-center mx-auto text-black w-full absolute h-fit top-0 left-0 -translate-y-1/2">{box.date}</div>
    <div className="comments text-[#b2b2b2] justify-center flex gap-2"><img className='w-6' src="svgs/comments.svg" alt="comment" />Comments ({box.no_of_comment})</div>
    <div className='text-[22px] textaaaa leading-6 mt-4 font-semibold text-center'>{box.title}</div>
</div>
</Link>
})}

                </div>
                </div>
    </section>
  )
}

export default blogs