import React from 'react'
import { feedback } from '../Constants'

const Clients = () => {
  return (
    <section id='clients' className='lg:mx-16 mx-4 py-8 mt-16 '>
        <div className='flex justify-between items-center'>
        <div className="text-[64px] px-16 mb-16 font-semibold">
              <p>What people are</p>
              <p>saying about us</p>
            </div>
            <div className='px-32 text-slate-400 items-center text-[28px] w-1/2'>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
        <div className='flex ljustify-center items-center'>
    {
        feedback.map((item) => { return(
            <div className='p-16 w-1/3 hover:bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl'>
                <p className='text-[28px]  pb-4 mr-6'>{item.content}</p>
                <div className='flex'>
                    <img src={item.img} className='p-2'/>
                    <div className='flex-col'>
                    <p className='text-[28px]'>{item.name}</p>
                    <p className='text-[16px] text-slate-400'>{item.title}</p>
                    </div>
                </div>
                </div>
        )
    })
}
        </div>
    </section>
)}

export default Clients