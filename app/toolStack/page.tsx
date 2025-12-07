import Tools from "@/components/Tools"
import Image from "next/image"


function page() {

  const tools = [
    {name:"Javascript",icon:"/icon/js.png"},
    {name:"Typescript",icon:"/icon/typescript.png"},
    {name:"Chat Gpt",icon:"/icon/chat-gpt.png"},
    {name:"Illustrator",icon:"/icon/illustrator.png"},
    {name:"Discord",icon:"/icon/discord.png"},
    {name:"Google",icon:"/icon/google.png"},
    {name:"Vs Code",icon:"/icon/vs.png"},
    {name:"Intellij",icon:"/icon/intellij.png"},
    {name:"Google Meet",icon:"/icon/meet.png"},
    {name:"Motion",icon:"/icon/motion.png"},
    {name:"React",icon:"/icon/react.png"},
    {name:"MySql workbench",icon:"/icon/mysql.png"},
    {name:"Postman",icon:"/icon/post.png"},
    {name:"Figma",icon:"/icon/figma.png"},
  ]
  return (
    <div className="min-h-screen gap-16 pt-40 pb-40 flex flex-col items-center  bg-zinc-950 font-sans text-white dark:bg-black">
      <section className="w-full max-w-xl space-y-4 " >
        <h1 className="text-2xl font-semibold px-10 ">Toolstack</h1>
        <p className="text-[#909090] px-10 " >Technologies I rely on to craft seamless, modern digital experiences.</p>  
        <Tools/>      
      </section>

      <section className="w-full max-w-xl space-y-4 px-10 " >
        <h1>More Tools that I use</h1>
        <div className="grid grid-cols-7 gap-4 " >
          {
            tools.map((item,index)=>(
              <Image key={index} src={item.icon} height={1000} width={1000} alt={item.name} className="rounded-lg object-cover" />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default page
