"use client"
import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Threedot from '../components/threedot'
import { useState } from 'react'
import Contact from '../components/contact'

const everyblog = ({ currblog }) => {
  const [iziToast, setiziToast] = useState(null)
  useEffect(() => {
    let delay = 0
    let delay0 = 0
    let delay2 = 0
    const observerforfade = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && entry.target.classList.contains("betaheading")) {
            entry.target.style.setProperty('--animationdelay', `${delay * 2}00ms`) // Trigger animation when the section is in view
            entry.target.style.animationName = "fading" // Trigger animation when the section is in view
            observerforfade.unobserve(entry.target);
            if (delay != 1) {
              delay++
            }
            else {
              delay = 0
            }
          }
          if (entry.isIntersecting && entry.target.classList.contains("sideslider")) {
            entry.target.style.setProperty('--animationdelay', `${2 * delay0}00ms`) // Trigger animation when the section is in view
            entry.target.classList.add("sidefade") // Trigger animation when the section is in view
            observerforfade.unobserve(entry.target);
            if (delay0 != 2) {
              delay0++
            }
            else {
              delay0 = 0
            }
          }

          if (entry.isIntersecting && entry.target.classList.contains("leftsidefade")) {
            entry.target.style.setProperty('--animationdelay', `${delay2 * 2}00ms`) // Trigger animation when the section is in view
            entry.target.style.animationName = "leftsidefade" // Trigger animation when the section is in view
            observerforfade.unobserve(entry.target);
            if (delay2 != 1) {
              delay2++
            }
            else {
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
    leftsidefadeelements.forEach((element) => {
      observerforfade.observe(element)
    })
    elements.forEach((element) => {
      observerforfade.observe(element)
    })
    leftsiderelements.forEach((element) => {
      observerforfade.observe(element)
    })
    const loadizitoast = async () => {
      const izitoastmodule = (await import("izitoast")).default;
      setiziToast(izitoastmodule);
    };
    loadizitoast()
  }, [])
  const orionsubmit = async (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow"
    };

    let a = await fetch("/newcontact", requestOptions)
    let response = await a.json()
    if (response.error == false) {
      if (iziToast) {
        iziToast.success({
          title: "Success",
          message: "Your message has been sent.",
        });
      } else {
        console.error("iziToast is not loaded.");
      }
    }
    else {
      if (iziToast) {
        iziToast.error({
          title: "Error",
          message: "Something went wrong.",
        });
      } else {
        console.error("iziToast is not loaded.");
      }
    }
    if (allinputs) {
      allinputs.forEach((input) => {
        input.value = ""
      })

    }
    if (alltextarea) {
      alltextarea.forEach((textarea) => {
        textarea.value = ""
      })

    }
  }
  return (
    <main className='w-full h-auto bg-black text-white'>
      <Navbar />
      <div className="blackscreen absolute w-full opacity-0 transition-opacity z-[-10] bg-black/50 h-full top-0 left-0 "></div>
      <Threedot />
      <div className='py-[140px] max-[550px]:text-4xl max-[550px]:pb-[60px] max-[550px]:pt-[120px] max-[900px]:pb-[100px] max-[1000px]:pt-[160px] pt-[200px] mx-auto px-[10%]  max-[900px]:text-5xl text-6xl font-bold bg-[#09101A]'>
        {currblog.title}
      </div>
      <div className="content w-[65%] max-[1000px]:w-[80%] max-[550px]:w-[90%] mx-auto bg-black py-20">
        <img src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/list_2.jpg" alt="introimg" />
        <div className='flex gap-6 max-[550px]:justify-between my-5 relative'>
          <div className="comments text-[#b2b2b2] justify-center max-[550px]:text-base flex gap-2 font-semibold text-lg"><img className='w-6' src="svgs/comments.svg" alt="comment" />Comments ({currblog.no_of_comment})</div>
          <div className="comments text-[#b2b2b2] justify-center text-lg flex max-[550px]:text-base gap-2 font-semibold"><img className='w-6' src="svgs/clock.svg" alt="time" />{currblog.date}</div>
        </div>
        <div className=''
          dangerouslySetInnerHTML={{ __html: currblog.content }}
        >
        </div>
      </div>
      <Contact orionsubmita={orionsubmit} />
    </main>
  )
}

export default everyblog
