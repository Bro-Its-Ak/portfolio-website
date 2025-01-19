"use client"
import React, { useEffect, useState, useRef } from 'react'
import { v4 } from 'uuid'

const projects = () => {
  const [allprojects, setallprojects] = useState([
    { name: "Netflix Clone", from: "23jan", to: "26jan", link: "https://netflixclonebyyash.vercel.app/", imgname: "netflix.jpg" },
    { name: "Twitter Clone", from: "23jan", to: "26jan", link: "https://twitterclonebyyash.vercel.app", imgname: "twitter.jpg" },
    { name: "Spotify Clone", from: "23jan", to: "26jan", link: "https://spotifywithyash.freewebhostmost.com/", imgname: "spotify.jpg" },
    { name: "Todo Maker", from: "23jan", to: "26jan", link: "https://itaskmanagerbyyash.vercel.app/", imgname: "itask.jpg" },
    { name: "Password Manager", from: "23jan", to: "26jan", link: "https://manageropbyyash.vercel.app/", imgname: "managerop.jpg" },
    { name: "GetmeaChai Website", from: "23jan", to: "26jan", link: "https://getmeachaibyyash.vercel.app/", imgname: "getmeachai.jpg" },
    { name: "Marketwise", from: "23jan", to: "26jan", link: "https://marketwisewithyash.vercel.app/", imgname: "marketwise.jpg" },
    { name: "Burek Restaurant Website", from: "23jan", to: "26jan", link: "https://burekrestaurantbyyash.vercel.app/", imgname: "burek.jpg" },
    { name: "Linkify Website", from: "23jan", to: "26jan", link: "https://linkify-black.vercel.app/", imgname: "linkify.jpg" },
    { name: "Bittree - become known", from: "23jan", to: "26jan", link: "https://bittreebyyash.vercel.app/", imgname: "bittree.jpg" },
  ])

  const [reviews, setreviews] = useState([
    { name: "Not Rated", profession: "no company", pra: "no review! no review! no review! no review!", imgname: "notfound.png" },
    { name: "Not Rated", profession: "no company", pra: "no review! no review! no review! no review!", imgname: "notfound.png" },
    { name: "Alexandar Walker", profession: "graphic designer", pra: "Beautiful minimalist design and great, fast response with support.Highly recommended.Thanks Marketify!", imgname: "eugen.webp" },
  ])
  const handleMouseEnter = async () => {
    document.querySelector(".catter").style.animationPlayState = "paused"
  };
  const handleMouseLeave = async () => {
    document.querySelector(".catter").style.animationPlayState = "running"

  };

  return (
    <section id='projects' className='bg-black py-28 max-[550px]:py-20 px-[9%] max-[800px]:px-[5%] max-[985px]:px-[10%] max-[1050px]:px-[6%]'>
      <div className='text-white gap-4 w-2/3 max-[800px]:w-full max-[1050px]:w-[88%] max-[550px]:w-auto tracking-tight flex flex-col items-start'>
        <h1 className='text-[#55e6a5] betaheading text-xl font-medium uppercase'>MY projects</h1>
        <h1 className='text-white betaheading max-[375px]:text-[26px] text-start max-[375px]:text-[26px] max-[550px]:text-[28px] font-semibold text-[38px]'>Showcasing my hosted projects, crafted with responsiveness in mind</h1>
      </div>

      {allprojects && <div className='flex relative gap-8 max-[550px]:gap-10 max-[750px]:flex-col gap-y-10 flex-wrap my-16'>
       
        <h1 className='text-3xl betaheading !translate-y-2 font-semibold max-[550px]:text-2xl'>CSS mockup showcase</h1>
        <div className='flex max-[750px]:w-[80%] flex-wrap mx-auto gap-10 max-[800px]:gap-8 max-[550px]:gap-8 max-[400px]:w-[92%] justify-center'>
          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[0].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[0].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[0].from} - {allprojects[0].to}</p>
            </div>
            <a target='_blank' href={allprojects[0].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[1].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[1].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[1].from} - {allprojects[1].to}</p>
            </div>
            <a target='_blank' href={allprojects[1].link} className="siteviewer">Visit site</a>
          </div>
        </div>

        <h1 className='text-3xl betaheading !translate-y-2 font-semibold max-[550px]:text-2xl'>Real-time JavaScript apps</h1>
        <div className='flex max-[750px]:w-[80%] mx-auto gap-10 justify-center max-[800px]:gap-8 max-[550px]:gap-8 max-[400px]:w-[92%] flex-wrap'>
          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[2].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[2].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[2].from} - {allprojects[2].to}</p>
            </div>
            <a target='_blank' href={allprojects[2].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[3].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[3].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[3].from} - {allprojects[3].to}</p>
            </div>
            <a target='_blank' href={allprojects[3].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[4].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[4].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[4].from} - {allprojects[4].to}</p>
            </div>
            <a target='_blank' href={allprojects[4].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[5].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[5].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[5].from} - {allprojects[5].to}</p>
            </div>
            <a target='_blank' href={allprojects[5].link} className="siteviewer">Visit site</a>
          </div>
        </div>

        <h1 className='text-3xl betaheading !translate-y-2 font-semibold max-[550px]:text-2xl'>Full-stack advanced websites</h1>
        <div className='flex max-[750px]:w-[80%] mx-auto gap-10 justify-center max-[800px]:gap-8 max-[550px]:gap-8 max-[400px]:w-[92%] flex-wrap'>
          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[6].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[6].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[6].from} - {allprojects[6].to}</p>
            </div>
            <a target='_blank' href={allprojects[6].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[7].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[7].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[7].from} - {allprojects[7].to}</p>
            </div>
            <a target='_blank' href={allprojects[7].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[8].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[8].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[8].from} - {allprojects[8].to}</p>
            </div>
            <a target='_blank' href={allprojects[8].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] twowitheachother max-[750px]:w-full rounded-xl z-10 relative originalmall'>
            <img className=' rounded-xl' src={`images/${allprojects[9].imgname}`} alt="" />
            <div className='textofimg rounded-[10px] p-6 absolute bottom-0'>
              <h1>{allprojects[9].name}</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>{allprojects[9].from} - {allprojects[9].to}</p>
            </div>
            <a target='_blank' href={allprojects[9].link} className="siteviewer">Visit site</a>
          </div>

          <div className='w-[calc(45%-16px)] flex-col flex gap-5 max-[900px]:h-[200px] max-[750px]:h-[250px] justify-center items-center h-[250px] border-4 twowitheachother max-[750px]:w-full rounded-xl border-dashed border-[#a2a2a2] z-10 relative originalmall'>
            <img className='w-16 invert' src={`svgs/add.svg`} alt="" />
            <div className='rounded-[10px]  p-6 py-0 '>
              <h1 className='font-semibold max-[985px]:text-xl max-[550px]:text-xl text-2xl'>Including This Website!</h1>
              <p className='text-[#55E6A5] text-sm font-normal before:w-[5%] before:bg-[#55E6A5] before:h-[1px] flex gap-2 items-center'>4jan - 18jan</p>
            </div>
            <a href="/" className="siteviewer">Visit site</a>
          </div>
        </div>


        <div className='grad'></div>
        <div className='grad2'></div>
      </div>}

      <div className='text-white px-2 gap-4 w-[500px] max-[550px]:w-auto mx-auto flex flex-col items-center py-10'>
        <h1 className='text-[#55e6a5] text-xl font-medium uppercase betaheading'>Clients Review</h1>
        <h1 className='text-white text-center betaheading max-[550px]:text-[30px] max-[375px]:text-[26px] font-semibold text-[38px]'>My Reviews</h1>
      </div>
      <div className='w-full pt-16 overflow-x-hidden'>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" flex w-full gap-6  flex-none pr-6 catter">
          {[...reviews, ...reviews].map((review) => {
            return <div key={v4()} className="border-[#333F4D] relative border-2 max-[550px]:min-w-full p-6 py-8 max-[985px]:min-w-[92%] min-w-[50%] max-w-[500px] text-white flex flex-col  revive">
              <div style={{backgroundColor:review.name=="Not Rated"?"#55E6A5":"", padding:review.name=="Not Rated"?"16px":""}} className='absolute rounded-full -translate-y-1/2 top-0 w-fit right-12'><img className={`w-24 max-[550px]:w-[4.5rem] rounded-full ${review.imgname == "notfound.png" ? "invert w-16" : ""}`} src={`images/${review.imgname}`} alt="" /></div>
              <div className="flex gap-2">
                <img loading="lazy" className="w-5" src="svgs/star.svg" alt="star" />
                <img loading="lazy" className="w-5" src="svgs/star.svg" alt="star" />
                <img loading="lazy" className="w-5" src="svgs/star.svg" alt="star" />
                <img loading="lazy" className="w-5" src="svgs/star.svg" alt="star" />
                <img loading="lazy" className="w-5" src="svgs/star.svg" alt="star" />
              </div>
              <div className="space-y-2.5 my-5">

                <h1 className="text-white font-bold text-[23px] leading-6 max-[550px]:text-[20px]">{review.name}</h1>
                <p className='text-white text-sm font-medium uppercase'>{review.profession}</p>
              </div>
              <div className='flex gap-4 mb-1'>
                <p className="text-white tracking-tight text-[16px] font-semibold leading-6 ">{review.pra}</p>
                {review.name != "Not Rated" && <img className='w-14 bg max-[550px]:hidden' src="svgs/comma.svg" alt="" />}
              </div>
            </div>
          })}
        </div>
      </div>

    </section>
  )
}

export default projects