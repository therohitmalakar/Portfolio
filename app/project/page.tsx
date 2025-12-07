"use client"

import Card from "@/components/Card"
import Link from "next/link"


function page() {
  return (
    <div className="min-h-screen gap-16 pt-40 flex flex-col items-center  bg-zinc-950 font-sans text-white dark:bg-black">
      <section className="w-full max-w-xl space-y-4 px-10 " >
        <h1 className=" text-lg sm:text-xl lg:text-2xl font-semibold " >Projects</h1>
        <p className="text-[#909090]" >"A collection of projects that reflect my skills, creativity, and focus on problem-solving."</p>
        <div className="mt-10 space-y-4 pb-40" >
          <Link href={"https://bite-rush-rosy.vercel.app/"} ></Link>    
        <Card src={"/biteRush.png"} project={"BiteRush"} caption={"A seamless food ordering platform built for speed, simplicity, and user delight."} info={"React, Aug 2025 "} />
        
        <Card src={"/fitFuel.png"} project={"Fitfuel"} caption={"A smart diet-planning platform that helps users track nutrition and build healthier habits based on BMI."} info={"React, Jan 2025 "} />
        
        <Card src={"/ochi.png"} project={"Ochi Clone (dark)"} caption={"A polished dark-mode Ochi website clone built to showcase clean UI, smooth transitions, and modern design principles."} info={"React, Jul 2025 "} />
        </div>
      </section>
    </div>
  )
}

export default page
