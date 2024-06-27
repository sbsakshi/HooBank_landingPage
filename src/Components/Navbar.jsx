import { useState } from "react"
import {logo,close,menu} from "../assets"
import { navLinks } from "../Constants"


const Navbar = () => {
    const [active,setactive]=useState(false)
    const [toggle,settoggle]=useState(false)

  return (
    <div className="lg:px-24 py-8 px-16">
    <nav className="flex justify-between items-center ">
        <img src={logo} alt="logo"
        className="w-[124px] h-[32px] sm:display-none" />
        <ul className="text-blue-300 hidden lg:flex">
           { navLinks.map((items)=>{
            return (<li key={items.id}><a href={`#${items.id}`}
                 className="inline-block p-10 text-2xl hover:text-white transition-colors">{items.title}</a></li>)
           })}
        </ul>
        <div className="lg:hidden" >
            <img
            src={toggle?close:menu}
            alt:menu
            onClick={()=>settoggle(!toggle)}>
            </img>
        </div>
    </nav>
    <nav>
    <ul className={`lg:hidden ${
        toggle?"text-blue-300  flex-col items-center":"hidden"}  `}>
           { navLinks.map((items)=>{
            return (<li key={items.id}><a href={`#${items.id}`}
                 className="inline-block p-10 text-2xl hover:text-white transition-colors">{items.title}</a></li>)
           })}
        </ul>
           
    </nav>
</div>
  )
}

export default Navbar