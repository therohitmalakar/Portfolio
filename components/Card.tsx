import Image from "next/image"


function Card({project,caption,info,src}:any) {
  return (
    <div className="bg-[#121212] space-y-2 border border-zinc-800 items-center sm:justify-items-normal flex flex-col sm:flex-row p-2 sm:p-4 lg:p-6 gap-4 sm:gap-6 lg:gap-8 rounded-2xl hover:-translate-y-2 hover:bg-linear-to-b from-[#121212] to-zinc-900 duration-300 " >
        <Image className= " w-[60%] sm:w-[45%] rounded-2xl h-20 sm:h-30 lg:h-40  " height={1000} width={1000} src={src} alt="" />
      <div className=" w-full sm:w-[55%] space-y-2 flex flex-col justify-between  " >
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
