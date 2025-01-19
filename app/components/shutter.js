"use client"
import React, { useEffect, useRef } from 'react'

const shutter = () => {
  const loading = useRef(null)
  const box = useRef(null)
  const removeshutter = () => {
    loading.current.style.animationName = "fade"
    loading.current.style.animationDuration = "0.4s"
    loading.current.style.animationDirection = "normal"
    loading.current.style.animationIterationCount = "1"
    loading.current.style.animationFillMode = "forwards"
  }
  useEffect(() => {
    // Disable scroll restoration on reload
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  useEffect(() => {
    const setscroll = () => {
        let elemnent = document.querySelector(".goup")
        if(elemnent){
          elemnent.style.setProperty("--maskposition",`${155-(Math.round(((document.documentElement.scrollTop/document.documentElement.scrollHeight) * 100) * 100) / 100)}%`)
        }
        }
      
    window.addEventListener('scroll', setscroll);
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        ::-webkit-scrollbar {
          width: 8px;
        }
      `;

    setTimeout(() => {
      removeshutter()
    }, 0.5 * 1000)

    document.documentElement.scroll(0, 0)
    setTimeout(() => {
      box.current.style.transform = "scaleY(0)"

    },0.8 * 1000);
    setTimeout(() => {
      document.head.appendChild(styleElement);
      let delay = 0
      let delay0 = 0
      let delay1 = 0
      let delay2 = 0
      const observerforfade = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting && entry.target.classList.contains("betaheading")) {
              entry.target.style.setProperty('--animationdelay', `${delay*2}00ms`) // Trigger animation when the section is in view
              entry.target.style.animationName = "fading" // Trigger animation when the section is in view
              observerforfade.unobserve(entry.target);
              if(delay != 1){
                delay++
              }
              else{
                delay = 0
              }
            }
            if (entry.isIntersecting && entry.target.classList.contains("twowitheachother")) {
              entry.target.style.animationName = "fading" // Trigger animation when the section is in view
              observerforfade.unobserve(entry.target);
             
            }
            if (entry.isIntersecting && entry.target.classList.contains("sideslider")) {
              entry.target.style.setProperty('--animationdelay', `${2 * delay0}00ms`) // Trigger animation when the section is in view
              entry.target.classList.add("sidefade") // Trigger animation when the section is in view
              observerforfade.unobserve(entry.target);
              if(delay0 != 2){
                delay0++
              }
              else{
                delay0 = 0
              }
            }
            if (entry.isIntersecting && entry.target.classList.contains("sideslider2")) {
              entry.target.style.setProperty('--animationdelay', `${2 * delay1++}00ms`) // Trigger animation when the section is in view
              entry.target.classList.add("sidefade") // Trigger animation when the section is in view
              observerforfade.unobserve(entry.target);
            }
            if (entry.isIntersecting && entry.target.classList.contains("rightslider")) {
              entry.target.style.setProperty('--animationdelay', `0ms`) // Trigger animation when the section is in view
              entry.target.style.animationName = "rightslider" // Trigger animation when the section is in view
              observerforfade.unobserve(entry.target);
            }
            if (entry.isIntersecting && entry.target.classList.contains("leftsidefade")) {
              entry.target.style.setProperty('--animationdelay', `${delay2*2}00ms`) // Trigger animation when the section is in view
              entry.target.style.animationName = "leftsidefade" // Trigger animation when the section is in view
              observerforfade.unobserve(entry.target);
              if(delay2 != 1){
                delay2++
              }
              else{
                delay2 = 0
              }
            }
          });
        },
        { threshold: 0.2 } // Adjust the threshold as needed
      )
      let elements = document.querySelectorAll(".betaheading")
      let leftsiderelements = document.querySelectorAll(".sideslider")
      let leftsidefadeelements = document.querySelectorAll(".leftsidefade")
      let leftsiderelements2 = document.querySelectorAll(".sideslider2")
      let rightsiderelements = document.querySelectorAll(".rightslider")
      let twowitheachother = document.querySelectorAll(".twowitheachother")
      elements.forEach((element) => {
        observerforfade.observe(element)
      })
      leftsiderelements.forEach((element) => {
        observerforfade.observe(element)
      })
      rightsiderelements.forEach((element) => {
        observerforfade.observe(element)
      })
      leftsidefadeelements.forEach((element) => {
        observerforfade.observe(element)
      })
      leftsiderelements2.forEach((element) => {
        observerforfade.observe(element)
      })
      twowitheachother.forEach((element) => {
        observerforfade.observe(element)
      })
    }, 0.9 * 1000);
   
  }, [])

  return (
    <div ref={box} className='w-screen cursor-default select-none origin-top malapuri fixed top-0 left-0 z-[1000] flex justify-center items-center h-screen bg-[#1a1a1a]'>
      <h1 ref={loading} className='flex text-[#8080803b] shutter max-[550px]:mb-10 relative items-end font-semibold tracking-tight text-8xl max-[1100px]:text-7xl max-[800px]:text-5xl transition-all'>LOADING</h1>
    </div>
  )
}

export default shutter
