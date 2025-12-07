import Form from "@/components/Form";
import Tools from "@/components/Tools";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const day = new Date().toLocaleDateString("en-us", { weekday: "long" });

  const toolStack = [
    {image:"/nodejs.png",tool:"Node.js",link:"https://share.google/FZ284OjvzzMuf8Vkr"},
    {image:"/MongoDB.png",tool:"MongoDB",link:"https://www.mongodb.com/"},
    {image:"/github.png",tool:"Github",link:"https://github.com/therohitmalakar"},
    {image:"/docker.png",tool:"Docker",link:"https://www.docker.com/"},
    {image:"/Next.js.png",tool:"Next.js",link:"https://nextjs.org/"},
    {image:"/Express.png",tool:"Express.js",link:"https://expressjs.com/"},
  ]

  const projects = [
    {image:"/nodejs.png",name:"BiteRush",link:"https://bite-rush-rosy.vercel.app/"},
    {image:"/nodejs.png",name:"Limo Booking",link:"https://fcl-limo.vercel.app/"},
    {image:"/thirdeye.svg",name:"Third Eye",link:"https://thirdeye-rho.vercel.app/"},
    {image:"/nodejs.png",name:"Ochi",link:"https://ochi-clone-dark-mode.vercel.app/"},
  ]
  return (
    <div className="min-h-screen gap-16 pt-40 flex flex-col items-center  bg-zinc-950 font-sans text-white dark:bg-black">
      <section id="about" className="w-full max-w-xl space-y-4 px-10  ">
        <Image
          height={100}
          width={100}
          src={"/me.jpg"}
          alt="avatar"
          className="rounded-full object-cover w-15 grayscale hover:grayscale-0 cursor-pointer "
        />
        <h1 className="text-2xl font-bold ">Hey, Rohit here</h1>
        <p className="text-base ">How's your {day} ? </p>
        <p className="leading-relaxed mt-6 ">
          Hey!!, I'm Rohit Malakar, a passionate Developer who
          specializes in creating web apps that are quick, clear, and easy to
          use. I enjoy using cutting-edge JavaScript technologies like React/Next,
          Node.js, Express, and MongoDB to transform concepts into tangible
          digital experiences. I like learning new tools,
          solving real-world issues, and constantly refining my development
          process.
        </p>
        <button className=" mt-2 px-8 py-2 rounded-lg font-semibold border border-zinc-800 bg-[#121212] cursor-pointer hover:-translate-y-2 duration-300  ">
          <Link href={"/#contact"}  >Contact</Link> 
          
        </button>
      </section>

      {/* {work section}   */}
      <section className="w-full max-w-xl space-y-4 px-10 ">
        <h1 className="text-2xl font-semibold ">Work</h1>
        <div className="border border-zinc-400 py-4 px-6 rounded-3xl ">
          <Image
            height={1048}
            width={614}
            src={
              "https://websenor.com/wp-content/uploads/2025/08/Websenor-Website-scaled.webp"
            }
            alt="avatar"
            className="rounded-3xl object-cover w-full hover:scale-105 duration-300 "
          />
        </div>
        {/* <CarouselDemo/> */}
        <div className="flex justify-between ">
          <div className="flex items-center gap-2  ">
            <Image
              height={100}
              width={100}
              src={
                "data:image/jpeg;base64,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"
              }
              alt="avatar"
              className="rounded-lg object-cover w-10 "
            />
            <h1 className="font-semibold ">Websenor Pvt Ltd</h1>
            <p className="text-gray-400 font-semibold text-sm  ">
              (Aug-Nov'25)
            </p>
          </div>
          <div className="flex gap-2 ">
            <button className="bg-[#121212] rounded-full p-3 cursor-pointer hover:scale-95  ">
              <IoIosArrowBack />
            </button>
            <button className="bg-[#121212] rounded-full p-3 cursor-pointer hover:scale-95 ">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="w-full max-w-xl space-y-4 px-10 ">
        <h1 className="text-2xl font-semibold ">Projects</h1>
        {projects.map((item, index) => (
          <div key={index} className="flex justify-between group cursor-pointer  ">
            <div className="flex items-center gap-4    ">
              <Image
                height={100}
                width={100}
                src={item.image}
                alt="avatar"
                className="rounded-full object-cover w-10 grayscale group-hover:grayscale-0   "
              />
              <Link href={item.link} className="text-gray-500  font-semibold group-hover:text-white group-hover:translate-x-2 duration-300 transition ">
                {item.name}
              </Link>
            </div>
            <div>
              <button className="bg-[#121212] rounded-full p-1 group-hover:-rotate-12 duration-300     ">
                <IoIosArrowForward className="w-4" />
              </button>
            </div>
          </div>
        ))}
      </section>

      <Tools/>

      <Form/> 

      <section id="contact" className="w-full max-w-xl space-y-4 px-10">
        <div className="flex justify-center gap-2 ">
          <div className="border group border-zinc-800 px-6 py-4 text-xl rounded-lg hover:border-zinc-600   ">
            <FaInstagram className="group-hover:-translate-y-2 duration-300 cursor-pointer " />
          </div>
          <div className="border group border-zinc-800 px-6 py-4 text-xl rounded-lg hover:border-zinc-600   ">
            <FaLinkedin className="group-hover:-translate-y-2 duration-300 cursor-pointer " />
          </div>
          <div className="border group border-zinc-800 px-6 py-4 text-xl rounded-lg hover:border-zinc-600   ">
            <FaGithub className="group-hover:-translate-y-2 duration-300 cursor-pointer " />
          </div>
          <div className="border group border-zinc-800 px-6 py-4 text-xl rounded-lg hover:border-zinc-600   ">
            <FaXTwitter className="group-hover:-translate-y-2 duration-300 cursor-pointer " />
          </div>
        </div>
      </section>

      <footer className="w-full max-w-xl space-y-4 px-10 pb-40 ">
        <div className="flex flex-col items-center ">
          <h1>Thanks for Visiting.</h1>
          <p className="text-sm text-gray-400 ">Have a nice day</p>
        </div>
      </footer>
    </div>
  );
}
