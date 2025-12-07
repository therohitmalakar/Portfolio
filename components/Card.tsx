import Image from "next/image"


function Card({project,caption,info,src}:any) {
  return (
    <div className="bg-[#121212] border border-zinc-800 flex p-6 gap-8 rounded-2xl hover:-translate-y-2 hover:bg-linear-to-b from-[#121212] to-zinc-900 duration-300 " >
        <Image className="w-[45%] rounded-2xl h-40  " height={1000} width={1000} src={src} alt="" />
      <div className="w-[55%] space-y-2 flex flex-col justify-between  " >
        <div>
        <h1>{project}</h1>
        <p className="text-[#909090] font-semibold " >{caption}</p>
        </div>
        <p className="text-zinc-500 font-semibold " >{info}</p>
      </div>
    </div>
  )
}

export default Card
