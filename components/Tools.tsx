"use client"

import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'

function Tools() {
     const toolStack = [
    {image:"/nodejs.png",tool:"Node.js",link:"https://share.google/FZ284OjvzzMuf8Vkr"},
    {image:"/MongoDB.png",tool:"MongoDB",link:"https://www.mongodb.com/"},
    {image:"/github.png",tool:"Github",link:"https://github.com/therohitmalakar"},
    {image:"/docker.png",tool:"Docker",link:"https://www.docker.com/"},
    {image:"/Next.js.png",tool:"Next.js",link:"https://nextjs.org/"},
    {image:"/Express.png",tool:"Express.js",link:"https://expressjs.com/"},
  ]
  return (
    <section id="tools" className="w-full max-w-xl space-y-4 px-10  ">
        <h1 className="text-2xl font-semibold ">Tool Stack</h1>
        <div className=" grid grid-cols-2 gap-2 sm:gap-4 ">
          {toolStack.map((item, index) => (
            <div
              key={index}
              className="bg-[#121212] flex justify-between cursor-pointer  border border-zinc-800 py-4 px-6 rounded-xl group duration-300 "
            >
              <div className="flex items-center gap-2 sm:gap-4 ">
                <Image
                  height={100}
                  width={100}
                  src={item.image}
                  alt="avatar"
                  className=" object-cover w-4 sm:w-10 grayscale group-hover:grayscale-0    "
                />
                <Link href={item.link} className="font-semibold ">{item.tool}</Link>
              </div>
              <button className="bg-[#222222] rounded-full my-2 px-1 hidden  group-hover:block duration-300     ">
                <IoIosArrowForward className="w-4 " />
              </button>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Tools
