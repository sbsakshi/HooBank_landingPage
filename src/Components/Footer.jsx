import logo from "../assets/logo.svg"
import { footerLinks } from "../Constants"

const Footer = () => {
  return (
    <div className='flex lg:mx-16 mx-4 py-8 mt-16 justify-between px-16'>
        <div className='flex-col'>
            <img src={logo} alt=""  />
            <p className="mt-4 text-slate-400 text-[28px] w-1/2">A new way to make the payments easy, reliable and secure.</p>
            </div>
            
                {
                    footerLinks.map((link) => {
                        return (
                            <div className="flex-col" >
                               <p className="text-[36px] font-semibold">{link.title}</p>
                               <ul>
                               {
                                link.links.map((item) => {return (
                                    <li className="text-[28px] p-2"><a href={item.link}></a>{item.name}</li>
                                )})
                               } 
                               </ul></div>
                        )})
                }
        
            </div>
            )
}

export default Footer