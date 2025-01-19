"use client"
import React from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

const threedot = ({orionsubmita}) => {
    const {handleSubmit,formState:{errors,isSubmitting},register} = useForm()
    const closebtn = ()=>{
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        ::-webkit-scrollbar {
          width: 8px;
        }
      `;
      document.head.appendChild(styleElement);
      document.querySelector(".tab").style.transform = "translateX(100%)"
      document.querySelector(".tab").style.opacity = 0
      const blackscreen = document.querySelector(".blackscreen")
      blackscreen.style.opacity = 0
      blackscreen.style.zIndex = -10
  }
  return (
    <div className='pt-[165px] tab top-0 z-[1000] max-[700px]:w-full bg-[#09101A] right-0 fixed h-screen flex flex-col gap-20 overflow-y-scroll w-[400px] p-8 opacity-0 translate-x-full'>
        <div className='bg-[#141C27] flex items-center justify-between fixed top-0 right-0 p-7 py-6 w-[inherit]'>
            <div className='text-xl cursor-pointer font-semibold flex items-center gap-3'>
                            <div className='bg-[#55E6A5] w-[50px] h-[50px] relative p-5'><Image
                                src="/images/logo.png"
                                alt="logo"
                                sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                                fill={true}
                            /></div>
                            <h1>YASH</h1>
            </div>
                        <button aria-label='close' onClick={closebtn} className='bg-[#55E6A5] rounded-full closingbtna p-3.5 w-fit h-fit'><img className='w-3.5 ' src="svgs/wrong.svg" alt="" /></button>
        </div>

<div className='space-y-5'>
  <h1 className='text-white uppercase font-semibold text-xl'>About me</h1>
  <p className='text-[#b2b2b2] font-medium leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis tempora nostrum possimus adipisci voluptas perferendis consectetur. Ad hic quisquam unde.</p>
</div>

<form onSubmit={handleSubmit(orionsubmita)} className='flex flex-col gap-8'>
  <h1 className='text-xl -mb-1 font-semibold text-white uppercase'>get in touch</h1>
                        <div>
                            <input {...register("name", { required: { value: true, message: "Please fill out this field." } })} placeholder='Your Name' className='border font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' type="text" />
                            {errors.name && <div className='mt-2 text-[#dc3232]'>{errors.name.message}</div>}
                        </div>
                        <div>
                            <input {...register("email", { required: { value: true, message: "Please fill out this field." } })} placeholder='Your Email' className='border font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' type="email" />
                            {errors.name && <div className='mt-2 text-[#dc3232]'>{errors.name.message}</div>}
                        </div>
                        <div>
                            <textarea {...register("message")} placeholder='Message(optional)' className='border resize-none font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' rows={6}></textarea>
                        </div>
                        <button disabled={isSubmitting} type='submit' className='bg-[#55E6A5] topbtn p-[22px] px-9 text-base gap-2 flex items-center w-fit text-black font-medium'>{isSubmitting?"Loading...":"Submit now!!"}</button>
                    </form>
    </div>
  )
}

export default threedot