import { clients } from "../Constants"
import Clients from "./Clients"


const CTA = () => {
  return (
    <div className="flex lg:mx-16 mx-4 py-8 mt-8 justify-between items-center">{
        clients.map((client)=>{
            return(<div><img src={client.logo} alt="" /></div>)
        })}</div>
  )
}

export default CTA