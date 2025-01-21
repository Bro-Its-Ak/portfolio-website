"use client"
import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useForm } from 'react-hook-form'

const about = ({orionsubmita}) => {
    const spanRef1 = useRef(null)
    const spanRef2 = useRef(null)
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm()
    const runcounting = () => {
        const el = spanRef1.current;
        const el2 = spanRef2.current;
        gsap.to(
            { value: 0 },
            {
                value: 10,
                duration: 2,
                onUpdate: function () {
                    if (el) el.textContent = Math.round(this.targets()[0].value);
                },
            }
        );
        gsap.to(
            { value: 0 },
            {
                value: 7,
                duration: 2,
                onUpdate: function () {
                    if (el2) el2.textContent = Math.round(this.targets()[0].value);
                },
            }
        );
    };

    const prevcounting = () => {
        let el = spanRef1.current
        let el2 = spanRef2.current
        gsap.to({ value: 10 }, {
            value: 0, duration: 1, onUpdate: function () {
                if (el) {
                    el.textContent = Math.round(this.targets()[0].value)
                }
            }
        })
        gsap.to({ value: 7 }, {
            value: 0, duration: 1, onUpdate: function () {
                if (el2) {
                    el2.textContent = Math.round(this.targets()[0].value)
                }
            }
        })
    }
    useEffect(() => {
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        runcounting(); // Trigger animation when the section is in view
                    }
                    else {
                        prevcounting(); // Run when the section goes out of view
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold as needed
        );


        if (spanRef1.current) {
            observer.observe(spanRef1.current);
        }


        return () => {
            if (spanRef1.current) {
                observer.unobserve(spanRef1.current);
            }
        };
    }, []);
   


    return (
        <section className='bg-black py-24 max-[550px]:py-20'>
            <div id='services' className='scroll-mt-32'>
                <div className='text-white papaheading gap-4 w-[500px] max-[550px]:w-auto mx-auto flex flex-col items-center'>
                    <h1 className='text-[#55e6a5] text-xl font-medium uppercase betaheading'>MY service</h1>
                    <h1 className='text-white text-center max-[550px]:text-[30px] max-[375px]:text-[26px] font-semibold text-[38px] betaheading'>Crafting solutions that deliver value and results</h1>
                </div>

                <div className='flex justify-center gap-6 max-[550px]:w-[92%] w-[84%] gap-y-16 max-[550px]:gap-y-20 max-[800px]:w-[92%]  max-[985px]:w-[82%] max-[750px]:w-[75%] max-[985px]:flex-wrap max-[1050px]:w-[92%] mx-auto my-[7.5rem] max-[550px]:my-24'>
                    <div className='max-[750px]:w-full hover:scale-90 cursor-pointer w-1/3 transition-transform max-[985px]:w-[calc(50%-12px)] '>
                    <div onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth",block:'start'})} className='flex flex-col gap-4  sideslider border-[3px]  relative p-6 pt-20 justify-center items-center border-[#191919]'>
                        <img className='w-24 absolute top-[-48px]' src="svgs/webdesign.svg" alt="" />
                        <h2 className='text-xl font-medium'>Website Design</h2>
                        <p className='text-center font-medium text-[#b2b2b2] text-base leading-7'>I create engaging websites that enhance user experience while ensuring a Stunning, user-friendly design. I also delivers a final product that captivates visitors and drives success for your brand.</p>
                    </div></div>

                    <div className='max-[750px]:w-full hover:scale-90 w-1/3 cursor-pointer transition-transform max-[985px]:w-[calc(50%-12px)] '>
                    <div onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth",block:'start'})} className='flex flex-col gap-4  sideslider border-[3px]  relative p-6 pt-20 justify-center items-center border-[#191919]'>
                        <img className='w-24 absolute top-[-48px]' src="svgs/webdev.svg" alt="" />
                        <h2 className='text-xl font-medium'>Website Development</h2>
                        <p className='text-center font-medium text-[#b2b2b2] text-base leading-7'>I can develop the code for user interaction of the website that works smoothly on the backend with database and logic with the effective use of Artificial Intelligence(AI) and APIs to connect the frontend and backend.</p>
                    </div>
                    </div>
                    <div className='max-[750px]:w-full hover:scale-90 w-1/3 cursor-pointer transition-transform max-[985px]:w-[calc(50%-12px)] '>
                                            <div onClick={()=>document.getElementById("projects").scrollIntoView({behavior:"smooth",block:'start'})} className='flex flex-col gap-4  sideslider border-[3px]  relative p-6 pt-20 justify-center items-center border-[#191919]'>
                        <img className='w-24 absolute top-[-48px]' src="svgs/responsive.svg" alt="" />
                        <h2 className='text-xl font-medium'>Responsive Website</h2>
                        <p className='text-center font-medium text-[#b2b2b2] text-base leading-7'>My Websites are expertly designed to be fully functional on any device, ensuring an exceptional user experience whether viewed on a phone, tablet, laptop, or other platforms.</p>
                    </div>
                    </div>


                </div>
            </div>

            <div id='about' className='flex  scroll-mt-32 w-[82%] max-[800px]:w-[92%] max-[985px]:flex-col max-[985px]:gap-16 max-[1050px]:w-[88%] max-[985px]:w-[80%] gap-[4%] mx-auto'>

                <div className='w-[50%] px-2 max-[985px]:w-full'>
                    <div className='text-white gap-4 mx-auto flex flex-col justify-center'>
                        <h1 className='text-[#55e6a5] text-xl betaheading font-medium uppercase'>ABOUT ME</h1>
                        <h1 className='text-white text-start betaheading max-[550px]:text-[30px] max-[375px]:text-[26px] font-semibold text-[38px]'>Behind the Code: A Visionary Creative Mind</h1>
                    </div>
                    <div className='my-24 before:w-full w-[92%] max-[985px]:mb-10 max-[985px]:mt-16 before:h-[2px] max-[985px]:before:hidden flex gap-4 items-start before:mt-[6px] before:block before:bg-[#b2b2b2]'>
                        <p className='text-base text-[#b2b2b2] '>I am Yash Dwivedi, a full-stack web developer who started his journey at the end of 2023 and gained a lot of knowledge that is enough to create innovative websites for scaling the growth of businesses and making their presence felt.</p>
                    </div>
                    <a href='/myresume.pdf' className='bg-[#55E6A5] topbtn ml-[24%] max-[985px]:ml-0 p-[22px] px-9 text-base gap-2 flex items-center text-black font-medium'>Download CV <img className='w-6' src="svgs/download.svg" alt="" /></a>
                </div>

                <div className='w-[50%] relative rightslider max-[985px]:w-full'>
                    <div className='aboutimage relative w-fit'>

                        <img className='pt-[20px] pr-[20px] relative z-40' src="images/jjk.png" alt="" />
                        <div className='bg-[#232323] absolute z-50 bottom-[-11%] gap-4 flex items-center left-[10%]  p-4 w-[75%] '>
                            <div className='bg-[#323232] p-3 rounded-full h-fit'>
                                <img className=' bg-[#b2b2b2] w-20 rounded-full' src="images/pie.gif" alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-semibold'>Daily Work</h1>
                                <p className='text-[#b2b2b2]'>4 -5 Hours Driven by passion and dedication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='touch' className='flex max-[985px]:w-[80%] max-[800px]:w-[92%] max-[985px]:gap-6 max-[985px]:flex-col gap-6 mx-auto mt-36 max-[550px]:mt-20 max-[375px]:mt-16 w-[82%] max-[1050px]:w-[88%]'>

                <div className='w-1/2 max-[985px]:w-full my-20 max-[985px]:mb-0'>
                    <h1 className='font-semibold leftsidefade text-[60px] max-[550px]:text-[45px] max-[375px]:text-[40px] max-[375px]:leading-[55px] leading-[70px]'><span className='text-[90px] max-[550px]:text-[65px] max-[375px]:text-[60px] font-bold'>Design</span> and Innovation</h1>
                    <p className='text-[#b2b2b2] my-11 mt-10 leading-7'>I started by learning the basics from various online courses and created projects based on what I learned. Additionally, I worked on side projects that helped me improve my skills and enhance my knowledge by using AI tools that are essential for creating innovative and modern websites.</p>
                    <div className='flex gap-6 max-[550px]:flex-col'>
                        <div className='bg-[#09101A] sideslider2 max-[985px]:py-12 py-8 flex flex-col  items-center justify-center w-full'>
                            <img className='w-20' src="svgs/projects.svg" alt="projects" />
                            <h1 className='text-[40px] mt-4 mb-1 font-bold'><span ref={spanRef1}>0</span>+</h1>
                            <p className='text-lg'>Completed projects</p>
                        </div>
                        <div className='bg-[#09101A] sideslider2 max-[985px]:py-12 py-8 flex flex-col  items-center justify-center w-full'>
                            <img className='w-20' src="images/review.png" alt="reviews" />
                            <h1 className='text-[40px] mt-4 mb-1 font-bold'><span ref={spanRef2}>0</span>+</h1>
                            <p className='text-lg'>Client review</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 max-[985px]:w-full bg-[#09101a] max-[550px]:p-6 p-10 pt-12'>
                    <h1 className='text-[40px] leading-[20px] betaheading font-medium max-[550px]:text-[28px] max-[550px]:leading-[30px] max-[550px]:-mb-2'>GET TOUCH ME?</h1>
                    <p className='text-[#b2b2b2] my-10'>For your care, I provide everything you need — personalized solutions and innovative designs. I am your trusted partner in well-being.</p>
                    <form onSubmit={handleSubmit(orionsubmita)} className='flex flex-col gap-8'>
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
                        <button disabled={isSubmitting} type='submit' className='bg-[#55E6A5] topbtn p-[22px] px-9 text-base gap-2 flex items-center w-fit text-black font-medium'>{isSubmitting?"Loading...":"Submit now!!"}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default about