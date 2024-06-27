import { socialMedia } from "../Constants"
const Socials = () => {
  return (
    <div>
    
    <div className="flex lg:mx-16 mx-4 py-8 justify-between items-center divide-x-2 divide-cyan-100">
        <p>Copyright @ 2024 HooBank. All Rights Reserved.</p>
        <div className="flex ">
            {
        socialMedia.map((item) => {
            return(
                <a href={item.link}><img
                className="p-4 " 
                src={item.icon}/></a>
            )
        })
    }
        </div>
        </div>
    </div>

  )
}

export default Socials