import React from 'react'
import frame3 from '../assets/Frame 3.png'
import image4 from '../assets/image 4.png'

const HeaderSection = () => {
  return (
    <>
      <div className=" grid xl:grid-cols-2 sm:grid-cols-1 bg-indigo-700 py-12">
        <div className='mx-auto mt-8'>
          <div className="text-white text-7xl font-bold font-['Merriweather'] mb-8">The only AI <br/>CRM for small <br/>businesses</div>
          <div className="text-white text-xl font-normal font-['Inter']">Respond to leads, organize contacts, and instantly <br/>generate client communications with AI CRM</div>
          <div className="w-44 h-14 p-5 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex my-8">
            <div className="text-black text-xl font-medium font-['Inter']">Start For Free</div>
          </div>
        </div>

        <div className='ml-32'>
          <img src={image4} className=''/>
          <img src={frame3} className='z-10 -mt-48'/>
        </div>
        
      </div>
    </>
  )
}

export default HeaderSection