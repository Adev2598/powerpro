import React from 'react'
import image9 from '../assets/image 9.png'
import image7 from '../assets/image 7.png'
import image15 from '../assets/image 15.png'
import image16 from '../assets/image 16.png'
import image8 from '../assets/image 8.png'

const Features = () => {
  return (
    <>
    <div className="text-center text-black text-6xl font-semibold font-['Inter'] py-32">Features  That Make Selling<br/>Easier </div>
    
    <div className='px-24'>
      <div className='grid xl:grid-cols-2 sm:grid-cols-1 rounded-xl bg-indigo-700 px-48 py-8'>
        <div className='pt-24 mt-14'>
          <div className="text-white text-xl font-normal font-['Inter']">AI CRM</div>
          <div className="text-white text-4xl font-semibold font-['Inter']">Book jobs faster with <br/>artificial intelligence</div>
          <div className="pt-8 w-80 text-white text-xl font-normal font-['Inter']">Secure more jobs with AI-powered customer relationship management tools designed to help you grow.</div>
        </div>

        <div>
          <img src={image9}/>
          <img src={image7}/>
        </div>

      </div>
    </div>

    <div className='px-24 mt-14'>
      <div className='grid xl:grid-cols-2 sm:grid-cols-1 gap-14'>
        <div className='bg-indigo-700 rounded-xl py-24'>
          <img src={image16} className='ml-24 -mt-12'/>
          <div className='pl-24'>
          <div className="w-80 h-32 flex-col justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-3.5 flex">
              <div className="text-center text-white text-base font-normal font-['Inter']">Automated Replies</div>
              <div className="text-white text-2xl font-semibold font-['Inter']">Instantly follow up <br/>with new customers</div>
            </div>
        <div className="text-white text-sm font-normal font-['Inter'] -mt-4">Create an automated response to any contact form <br/>requests submitted to your Powerpro website</div>
          </div>
          </div>
        </div>

        <div className='bg-indigo-700 rounded-xl '>
          <img src={image15} className='ml-32 mt-8'/>
          <img src={image8} className='ml-24 -mt-20'/>

          <div className="w-96 h-32 flex-col justify-start items-start gap-6 inline-flex pl-24">
            <div className="flex-col justify-start items-start gap-3.5 flex">
              <div className="text-center text-white text-base font-normal font-['Inter']">AI Generated Responess</div>
              <div className="text-white text-2xl font-semibold font-['Inter']">Send personalized <br/>responses in one click</div>
            </div>
          <div className="w-96 text-white text-sm font-normal font-['Inter']">Sync your email to Powerpro and instantly generate <br/>unique customer responses based on past messages.</div>
          </div>
        </div>
      </div>
    </div>
    </>
    )

}

export default Features