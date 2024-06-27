import { discount,robot } from "../assets"
import styles from "../Style";


const Hero = () => {
  return (
    <section id='home' className=" lg:flex px-0 justify-between overflow-hidden">
        <div className="lg:mx-16 mx-4">
        <div className="bg-gradient-to-b from-slate-500 to-slate-400 text-black flex text-2xl px-4 py-2 h-fit rounded-md  w-fit">
            <img src={discount} alt=""  className="mr-2"/>
            <span className="text-white mr-2">20%</span> discount for <span className="text-white mx-2">1 month</span> account
        </div>
        <div className="text-[96px] m-4">
            <p>The next</p> <p className="bg-clip-text text-transparent bg-gradient-to-bl from-cyan-300 to-blue-300">Generation</p> Payment method
        </div>
        <div className="text-[24px] text-slate-500 w-2/3">
            <p >Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.</p>
        </div>
        </div>
        <div>
        <img src={robot} 
        className=" w-[1000px] h-[800px]"/>
    {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
       
    </section>
  )
}

export default Hero


