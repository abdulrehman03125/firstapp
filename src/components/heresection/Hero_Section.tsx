import React from 'react'
import { Spotlight } from '../ui/Spotlight'
// import { Button } from "../ui/moving-border";

const Hero_Section = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center relative overflow-hidden  min-h-screen md:h-[40rem] w-full  mx-auto py-10 md:px-0"> 
    <div className='p-4 relative z-10 flex flex-col items-center justify-center text-center'>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
     
      <h1 className='mt-20 md:mt-0 font-bold text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>Master of the production</h1>
      <p className='mt-4 font-normal text-base text-neutral-300 md:text-lg max-w-lg mx-auto'>Discover the world of music with us Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eius expedita? Deleniti quaerat, similique fugit officiis ad, ipsum consectetur enim est repellat voluptate nam iste unde id totam, et distinctio.</p>
<div>

  {/* <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button> */}
      <button className='mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold  rounded-4xl hover:from-pink-600 hover:to-violet-600 transition duration-300'>Get Started</button>
</div>
    </div>
    
    </div>
 
 
 
  )
}

export default Hero_Section