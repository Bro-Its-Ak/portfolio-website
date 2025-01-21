"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const contact = ({ orionsubmita }) => {
    const { formState: { errors, isSubmitting }, register, handleSubmit } = useForm()
    const [vieweremail, setvieweremail] = useState("")
    const router = useRouter()
    const [isSubmittinga, setisSubmittinga] = useState(false)
    const takemethere = (id) => {
       let mallapuri = document.getElementById(id)
        if(mallapuri){
            mallapuri.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    else{
router.push("/")
    }
    }
    return (
        <section id='contact' className='bg-black scroll-m-36 max-[550px]:pt-20'>

            <div className='text-white max-[550px]:px-2 gap-4 w-[350px] max-[550px]:w-auto mx-auto flex flex-col items-center'>
                <h1 className='text-[#55e6a5] betaheading text-xl font-medium uppercase'>get in touch</h1>
                <h1 className='text-white betaheading text-center max-[550px]:text-[30px] max-[375px]:text-[26px] font-semibold text-[38px]'>Let’s discuss about an project!</h1>
            </div>
            <div className='w-[82%] max-[800px]:w-[92%] max-[985px]:w-[80%] max-[985px]:gap-6 max-[985px]:flex-col max-[1050px]:w-[88%] flex justify-between  mx-auto mt-12  items-center '>
                <form onSubmit={handleSubmit(orionsubmita)} className='flex leftsidefade flex-col max-[550px]:p-6 w-[57.5%] max-[985px]:w-full p-8 gap-8 bg-[#09101A]'>
                    <div>
                        <input {...register("name", { required: { value: true, message: "Please fill out this field." } })} placeholder='Your Name' className='border font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' type="text" />
                        {errors.name && <div className='mt-2 text-[#dc3232]'>{errors.name.message}</div>}
                    </div>
                    <div>
                        <input {...register("email", { required: { value: true, message: "Please fill out this field." } })} placeholder='Your Email' className='border font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' type="email" />
                        {errors.name && <div className='mt-2 text-[#dc3232]'>{errors.name.message}</div>}
                    </div>
                    <div>
                        <input {...register("phone")} placeholder='Phone Number(optional)' className='border font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' type="number" />
                    </div>
                    <div>
                        <textarea {...register("message")} placeholder='Message(optional)' className='border resize-none font-medium  border-[#55E6A5] p-5 py-[22px] w-full bg-transparent focus:outline-none' rows={6}></textarea>
                    </div>
                    <button disabled={isSubmitting} type='submit' className='bg-[#55E6A5] topbtn p-[22px] px-9 text-base gap-2 flex items-center w-fit text-black font-medium'>{isSubmitting ? "Loading..." : "Submit now!!"}</button>
                </form>
                <iframe title='my-address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93212.06870141659!2d77.6165579578527!3d28.987387246970687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f457b66325%3A0x42faa83387a6be5e!2sMeerut%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1737396359573!5m2!1sen!2sin" width="600" className='w-[40.5%] max-[985px]:w-full leftsidefade' height="665" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='w-full relative max-[550px]:pb-10 flex items-center justify-center gap-7 flex-col mainishere h-[420px]  bg-transparent my-28 mb-14'>
                <h1 className='text-[30px] betaheading max-[375px]:text-[26px] max-[550px]:text-[26px] z-20 text-center font-semibold uppercase'>Be the First to Know</h1>
                <div className='relative betaheading w-fit z-20 bg-[#131313] p-2  border-[#55E6A5] border max-[550px]:w-[92%]'>
                    <input onChange={(e) => { setvieweremail(e.target.value) }} value={vieweremail || ""} placeholder='Enter Your Email' className='font-medium w-[545px] max-[550px]:w-full p-5 py-[20px]  bg-transparent focus:outline-none ' type="email" />
                    <button disabled={isSubmittinga} onClick={async () => {
                        setisSubmittinga(true)
                        let a = await orionsubmita({ name: "None", email: vieweremail })
                        setisSubmittinga(false)
                    }} className='bg-[#55E6A5] absolute max-[550px]:translate-y-full max-[550px]:top-10 max-[550px]:left-0 topbtn p-[20px] px-8 text-base gap-2 flex items-center w-fit text-black font-medium my-auto top-[9%] right-[1.5%]'>{isSubmittinga ? "Loading..." : "Submit now!!"}</button>

                </div>
                <div className='absolute bg-black/90 z-0 -top-0.5 w-full h-[102%] left-0'></div>

            </div>
            <div className='w-[82%] max-[1050px]:w-[88%] mx-auto justify-between flex items-center max-[1050px]:flex-col max-[1050px]:gap-12 py-14 pb-20'>
                <div className='flex sideslider gap-5 w-fit max-[1050px]:w-full items-start'>
                    <div className='bg-[#55E6A5] w-fit rounded-full p-5'>
                        <img className='w-10' src="svgs/address.svg" alt="address" />
                    </div>
                    <div className='flex flex-col gap-3 w-[230px] max-[1050px]:w-full'>
                        <h1 className='text-xl font-semibold'>Address</h1>
                        <p className='text-[#b2b2b2]'>Meerut, Uttar Pradesh 250002</p>
                    </div>
                </div>
                <div className='flex sideslider gap-5 w-fit max-[1050px]:w-full items-start'>
                    <div className='bg-[#55E6A5] w-fit rounded-full p-5'>
                        <img className='w-7 h-7' src="svgs/talk.svg" alt="address" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-semibold'>Lets talk</h1>
                        <p className='text-[#b2b2b2]'>90860 53659,<br /> 90860 53659</p>
                    </div>
                </div>
                <div className='flex sideslider gap-5 w-fit max-[1050px]:w-full items-start'>
                    <div className='bg-[#55E6A5] w-fit rounded-full p-5'>
                        <img className='w-8 h-8' src="svgs/email.svg" alt="address" />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-semibold'>Send me email</h1>
                        <p className='text-[#b2b2b2]'>yashthecool2000@gmail.com,<br /> pratibhad.amit@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="h-[1px] w-[82%] max-[1050px]:w-[88%] mx-auto bg-[#13161A] justify-center"></div>
            <footer className='w-[82%] max-[550px]:w-[92%] max-[1050px]:w-[88%] flex justify-between mx-auto py-9'>
                <p className='text-[#b2b2b2f0]'>© Yash Dwivedi 2024 | All Rights Reserved</p>
                <ul className='text-[#b2b2b2] max-[985px]:hidden flex gap-10 font-medium'>
                    <li className='cursor-pointer hover:text-[#55E6A5] transition-colors' onClick={() => takemethere("home")}>Home</li>
                    <li className='cursor-pointer hover:text-[#55E6A5] transition-colors' onClick={() => takemethere("about")}>About</li>
                    <li className='cursor-pointer hover:text-[#55E6A5] transition-colors' onClick={() => takemethere("projects")}>Projects</li>
                    <li className='cursor-pointer hover:text-[#55E6A5] transition-colors' onClick={() => takemethere("contact")}>Contact</li>
                </ul>
            </footer>

        </section>
    )
}

export default contact