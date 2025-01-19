"use client"
import React, { useEffect } from 'react'

const navigation = () => {
    useEffect(() => {
      let observer = new IntersectionObserver((enteries)=>{
        enteries.forEach((entery)=>{
            if(entery.isIntersecting){
                document.querySelector(".goup").style.opacity = 1
            }
        })
      })
      let observer2 = new IntersectionObserver((enteries)=>{
        enteries.forEach((entery)=>{
            if(entery.isIntersecting){
                document.querySelector(".goup").style.opacity = 0
            }
        })
      })
      let element = document.getElementById("services")
      let element2 = document.getElementById("home")
      if(element && element2){

          observer.observe(element)
          observer2.observe(element2)
      }
    }, [])
    
  return (
    <div onClick={()=>{document.documentElement.scroll(0,0)}} className='p-2 bg-transparent transition-opacity goup opacity-0 fixed bottom-8 max-[430px]:bottom-16 max-[430px]:right-4 right-8 z-[300] rounded-full cursor-pointer'><img className='w-7' src="svgs/arrowup.svg" alt="UP" /></div>
  )
}

export default navigation