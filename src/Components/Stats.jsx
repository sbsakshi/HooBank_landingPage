import { stats } from "../Constants"

const Stats = () => {
  return (
    <section>
        <div className="flex w-full lg:px-32 text-[48px] py-16 justify-between">
            {
                stats.map((item)=>{
                    return(
                        <div className="font-bold	" key={item.id}>{item.value}<span className="bg-clip-text text-transparent bg-gradient-to-bl from-cyan-300 to-blue-300 font-normal	text-[44px] ml-4">{item.title}</span></div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Stats