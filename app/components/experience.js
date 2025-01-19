"use client"
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

const experience = () => {
    const [languages, setLanguages] = useState([
        { progress: 80, language: "HTML5" },
        { progress: 70, language: "CSS" },
        { progress: 90, language: "Javascript" },
        { progress: 65, language: "Tailwind" },
        { progress: 76, language: "Node.js" },
        { progress: 73, language: "React" },
        { progress: 69, language: "Next.js" },
        { progress: 82, language: "MongoDB" },
    ])
    const setbooster = () => {
        let mall = document.getElementsByClassName("oribar")
        if (mall) {
            for (let index = 0; index < mall.length; index++) {
                mall[index].classList.add("active-bar")

            }
        }
    }
    const setboosterto0 = () => {
        let mall = document.getElementsByClassName("oribar")
        if (mall) {
            for (let index = 0; index < mall.length; index++) {
                mall[index].classList.remove("active-bar")

            }
        }
    }

    useEffect(() => {
          let observer = new IntersectionObserver((enteries)=>{
            enteries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setbooster()
                    
                }
                else{
                    setboosterto0()
                }
            })
          })
          const firstelement = document.querySelector(".html")
          const secondelement = document.querySelector(".alllangs")
          if(firstelement){
            observer.observe(secondelement)
          }
    }, [])

    return (
        <section className='bg-[#09101A] py-24 max-[550px]:py-20'>
            <div className='text-white px-2 gap-4 w-[500px] max-[550px]:w-auto mx-auto flex flex-col items-center'>
                <h1 className='text-[#55e6a5] betaheading text-xl font-medium uppercase'>EDUCATION & SKILL</h1>
                <h1 className='text-white betaheading max-[550px]:text-[30px] max-[375px]:text-[26px] text-center font-semibold text-[38px]'>Demonstrating expertise and showcasing growth</h1>
            </div>

            <div className='max-[550px]:20 mx-auto w-[82%] max-[550px]:gap-y-12 max-[985px]:w-[80%] max-[800px]:w-[92%] max-[1050px]:w-[88%] flex gap-x-6 gap-y-20 my-24 flex-wrap'>
                {[{ from: 2024, to: 2025, heading: "Sigma Web Development Course", paragraph: "This Course provided me with the basic and intermediate knowledge and skills to start creating the Website and helped me understand logic, too." },
                { from: 2024, to: 2025, heading: "Exploring the Content on Internet", paragraph: "Along the same year, i also started to solve problems and create website that help other and creating designs inspired by big designs to sharpen my skills and make a positive impact on others." },
                ].map((item, index) => {
                    return <div key={index} className='flex leftsidefade max-[985px]:w-full flex-col gap-4 w-[calc(50%-12px)] '>
                        <h1 className='border border-[#55E6A5] text-lg text-[#55E6A5] px-6 py-3 w-fit'>{item.from} - {item.to}</h1>
                        <h1 className='text-[30px] max-[375px]:text-[26px] font-semibold max-[550px]:text-[25px]'>{item.heading}</h1>
                        <p className='text-[#b2b2b2] -mt-1 font-medium'>{item.paragraph}</p>
                    </div>
                })}

            </div>

            <div className='alllangs max-[985px]:w-[80%] max-[550px]:gap-y-8 max-[800px]:w-[92%] mx-auto w-[82%] max-[1050px]:w-[88%] flex gap-y-12 gap-6 scroll-mt-24 mt-24 mb-4 flex-wrap justify-center'>
                {languages && languages.map((box, index) => {
                    if (box.language != "HTML5") {
                        return <div key={index} className='font-medium max-[985px]:w-full w-[calc(50%-12px)] flex flex-col  bg-[#151C25]'>
                            <div className='py-5 px-6 flex gap-4 text-xl items-center'><img className='w-6' src={`svgs/${box.language}.svg`} alt="css" /><h1>{box.language}</h1> </div>
                            <div style={{ width: `${box.progress}%`, height: "6px" }} className='bar'>
                                <div className='oribar w-0 h-full bg-[#55E6A5]'></div>
                            </div>
                        </div>
                    }
                    else {
                        return <div key={index} className='font-medium html max-[985px]:w-full w-[calc(50%-12px)] flex flex-col  bg-[#151C25]'>
                            <div className='py-5 px-6 flex gap-4 text-xl items-center'><img className='w-6' src={`svgs/${box.language}.svg`} alt="css" /><h1>{box.language}</h1> </div>
                            <div style={{ width: `${box.progress}%`, height: "6px" }} className="bar">
                                <div className='oribar w-0 h-full bg-[#55E6A5]'></div>
                            </div>
                        </div>
                    }

                })}
            </div>
        </section>
    )
}

export default experience