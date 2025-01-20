"use client"
import React, { useCallback } from 'react'
import Image from 'next/image'
import { useMotionTemplate, useMotionValue, motion, animate, time } from 'framer-motion'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const navbar = () => {
    const xPercent = useMotionValue(0);
    const yPercent = useMotionValue(0);
    const [selectedindex, setselectedindex] = useState(0)
    const mask_image = useMotionTemplate`radial-gradient(40px 40px at ${xPercent}% ${yPercent}%,black,transparent)`
    const router = useRouter()


    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        document.querySelector(".blackscreen").addEventListener("click",(e)=>{
            const styleElement = document.createElement('style');
      styleElement.textContent = `
        ::-webkit-scrollbar {
          width: 8px;
        }
      `;
      document.head.appendChild(styleElement);
      document.querySelector(".tab").style.transform = "translateX(100%)"
      document.querySelector(".tab").style.opacity = 0
      const blackscreen = e.target
      blackscreen.style.opacity = 0
      blackscreen.style.zIndex = -10
        })
        let awsomes = document.querySelectorAll('.awsome')
        let intervalId = setInterval(() => {
            awsomes.forEach(element => {
                element.style.borderColor = getRandomColor();
            })
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        let allofthe = document.querySelectorAll(".awsome")
        const { width, height } = allofthe[selectedindex].getBoundingClientRect()
        allofthe.forEach((box) => {
            if (box != allofthe[selectedindex]) {
                box.style.opacity = 0
                box.parentElement.style.color = "white"
            }
            else {
                box.style.opacity = 1
                box.parentElement.style.color = "#55E6A5"
            }
        })
        let circumference = 2 * (width + height)
        const options = {
            times: [0, width / circumference, (width + height) / circumference, (2 * width + height) / circumference, 1],
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
        }
        animate(xPercent, [0, 100, 100, 0, 0], options)
        animate(yPercent, [0, 0, 100, 100, 0], options)
    }, [selectedindex])

    useEffect(() => {
        let ids = ["home", "about", "services", "projects", "blog", "contact"]
      let observer = new IntersectionObserver((enteries)=>{
        enteries.forEach((entery)=>{
            
            if(entery.isIntersecting){
                let index = ids.indexOf(entery.target.id)
            setselectedindex(index)
            }
        })
      },
      { threshold: 0.2 } )
      ids.forEach((id)=>{
        let elementam = document.getElementById(id)
        if(elementam)observer.observe(elementam)
            else{setselectedindex(4)}
      })
    }, [])
    

    function scrollToSection(id) {
        const section = document.getElementById(id);
        if(section){
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }
    else{
gettohome()
    }
      }
const gettohome = useCallback(()=>{
    router.push("/")
},[])
      const hihihuhu = ()=>{
              const styleElement = document.createElement('style');
              styleElement.textContent = `
                ::-webkit-scrollbar {
                  width: 0px;
                }
              `;
              document.head.appendChild(styleElement);
              document.querySelector(".tab").style.transform = "translateX(0%)"
              document.querySelector(".tab").style.opacity = 1
              const blackscreen = document.querySelector(".blackscreen")
              blackscreen.style.opacity = 1
              blackscreen.style.zIndex = 900
          }
          
    return (
        <nav className='bg-[#141C27] z-[500] max-[550px]:mx-0 max-[550px]:w-full max-[985px]:w-[80%] max-[800px]:w-[92%] max-[800px]:py max-[800px]:mx-[5%] max-[985px]:mx-[10%] text-white fixed top-0  w-[82%] max-[1050px]:w-[88%] mx-[9%] max-[1050px]:mx-[6%] flex justify-between items-center'>
            <Link href={"/"} className='text-3xl cursor-pointer max-[800px]:text-2xl font-semibold flex items-center gap-4'>
                <div className='bg-[#55E6A5] w-[80px] max-[800px]:w-[60px] max-[800px]:h-[60px] h-[80px] relative p-5'><Image
                    src="/images/logo.png"
                    alt="logo"
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                    fill={true}
                    priority={true}
                /></div>
                <h1>YASH</h1>
            </Link>
            <ul className='flex max-[985px]:hidden text-sm tracking-wide'>

                {["home", "about", "services", "projects", "blog", "contact"].map((item, currindex) => {
                    return <li key={currindex} onClick={() => setselectedindex(currindex)} className=' cursor-pointer rounded-lg w-auto h-auto relative'>
                        <div onClick={()=>{scrollToSection(item)}} className='uppercase px-4 py-3 z-20 relative hover:text-[#55E6A5] font-medium'>
                            <motion.div style={{ maskImage: mask_image }} className='awsome transition-all'></motion.div>{item}</div></li>
                })}
            </ul>

            <div onClick={hihihuhu} className='text-3xl max-[800px]:w-[60px] max-[800px]:h-[60px] justify-center hover:opacity-80 transition-opacity cursor-pointer bg-[#55E6A5] font-semibold flex items-center gap-4 relative w-[80px] h-[80px]'>
                <img className='w-8 max-[800px]:w-6' src="/svgs/hamburger.svg" alt="hamburger" />

            </div>

           
        </nav>
    )
}

export default navbar