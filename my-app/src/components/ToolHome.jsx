import React from 'react'
import image33 from '../assets/image 33.png'
import image4 from '../assets/image 4.png'
import image11 from '../assets/image 11.png'
import image12 from '../assets/image 12.png'
import image10 from '../assets/image 10.png'
import image13 from '../assets/image 13.png'

const ToolsHome = () => {
  return (
    <>
      <div>
        <div className='grid xl:grid-cols-2 sm:grid-cols-1 mt-24 gap-8'>
          <div className='py-48 px-24'>
            <div className="text-black text-6xl font-semibold font-['Inter']">Grow your business</div>
            <div className=" mt-4 w-96 text-gray-500 text-2xl font-normal font-['Inter']">Use built-in automation tools to turn website traffic into new customers.</div>
            <div className="mt-4 w-44 h-14 p-5 bg-indigo-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <button className="text-white text-xl font-medium font-['Inter']">Contact Sales</button>
            </div>
          </div>
          
          <div>
            <img src={image33} className='z-10'/>
            <img src={image4} className='w-48 h-32 ml-[140px] -mt-[189px]'/>
          </div>
        </div>

        <div className='grid xl:grid-cols-4 sm:grid-cols-1 bg-violet-400 -mt-[133px] px-24'>

          <div className='py-12'>
            <img src={image11} className="w-36 h-28"/>
            <div className="w-48 h-24 flex-col justify-start items-start gap-2 inline-flex mt-4">
              <div className="text-black text-xl font-semibold font-['Inter']">Lead Generation <br/>Form</div>
              <div className="w-48 text-black text-sm font-normal font-['Inter']">Every website includes a lead generation form with easy to set up AI responses.</div>
            </div>
          </div>

          <div className='py-12'>
            <img src={image12} className="w-36 h-28"/>
            <div className="w-48 h-24 flex-col justify-start items-start gap-2 inline-flex mt-4">
            <div className="text-black text-xl font-semibold font-['Inter']">Contact <br/>Organization</div>
              <div className="w-48 text-black text-sm font-normal font-['Inter']">Organize your growing list of contacts with custom fields</div>
            </div>
          </div>

          <div className='py-12'>
            <img src={image10} className="w-36 h-28"/>
            <div className="w-48 h-24 flex-col justify-start items-start gap-2 inline-flex mt-4">
              <div className="text-black text-xl font-semibold font-['Inter']">Email <br/>Organization</div>
              <div className="w-48 text-black text-sm font-normal font-['Inter']">Organize your growing list of contacts with custom fields</div>
            </div>
          </div>

          <div className='py-12'>
            <img src={image13} className="w-36 h-28"/>
            <div className="w-48 h-24 flex-col justify-start items-start gap-2 inline-flex mt-4">
              <div className="text-black text-xl font-semibold font-['Inter']">Automated <br/>Reviews</div>
              <div className="w-48 text-black text-sm font-normal font-['Inter']">Send review request to boost your Google reviews rating and reputation</div>
            </div>
          </div>
          
        </div>
      </div>
    </>
    
  )
}

export default ToolsHome