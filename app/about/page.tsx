"use client"

import Image from "next/image"
import Link from "next/link"

function page() {
  return (
    <div className="min-h-screen gap-16 py-40 flex flex-col items-center  bg-zinc-950 font-sans text-white dark:bg-black">
      <section className="w-full max-w-xl space-y-8 " >
        <h1 className="text-5xl font-bold leading-snug  " >Hi!! I am Rohit and I like turning concepts into seamless digital solutions. </h1>
        <Link href={"https://www.linkedin.com/in/rohit-malakar-58b3b3228/"} >
        <Image src={"/image.png"} height={1000} width={1000} alt="rohit" className="rounded-md hover:scale-105 duration-300 " />   
        </Link> 
      </section>
    </div>
  )
}

export default page
