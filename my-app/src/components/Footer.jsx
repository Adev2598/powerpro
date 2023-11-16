import React from 'react'

const Footer = () => {
  return (

    <div className="w-96 h-96 px-24 py-12 justify-start items-start gap-36 inline-flex mt-24">
  <div className="flex-col justify-start items-start gap-20 inline-flex">
    <div className="flex-col justify-start items-start gap-7 flex">
      <div className="flex-col justify-start items-start gap-10 flex">
        <div className="text-center text-black text-2xl font-semibold font-['Inter']">Stay Updated</div>
        <div className="flex-col justify-start items-start gap-2.5 flex">
          <div className="">
            <input placeholder='Your Email' className="text-gray-500 text-xl font-medium w-96 px-5 py-5 bg-white rounded-3xl border border-black justify-start items-center gap-2.5 inline-flex"/>
          </div>
          <div className="px-5 py-3.5 bg-indigo-700 rounded-2xl">
            <button className="text-white font-medium font-['General Sans']">Subcribe</button>
          </div>
        </div>
      </div>
      <div className="w-80 text-gray-500 text-lg font-normal font-['Inter']">Subcribe and get latest information form Powerpro. No need to worry about spam we will take care about it</div>
    </div>
    <div className="flex-col justify-start items-start gap-2 flex">
      <div className="justify-start items-center gap-0.5 inline-flex">
        <div className="w-4 h-4 relative" />
        <div className="w-80 text-gray-500 text-base font-medium font-['Inter']">2023 Powerpro, Inc.</div>
      </div>
      <div className="justify-start items-center gap-6 inline-flex" />
    </div>
  </div>
  <div className="flex-col justify-center items-end gap-24 inline-flex">
    <div className="justify-start items-start gap-20 inline-flex">
      <div className="flex-col justify-start items-start gap-7 inline-flex">
        <div className="text-center text-black text-2xl font-semibold font-['Inter']">Support </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className=" text-black font-normal font-['Inter']">Account Information</div>
          <div className=" text-black font-normal font-['Inter']">FAQ</div>
          <div className=" text-black font-normal font-['Inter']">Contact Us</div>
          <div className=" text-black font-normal font-['Inter']">Help Center</div>
          <div className=" text-black font-normal font-['Inter']">Website Builder</div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-7 inline-flex">
        <div className=" text-black text-2xl font-semibold font-['Inter']">Product</div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className=" text-black font-normal font-['Inter']">AI Assistant</div>
          <div className=" text-black font-normal font-['Inter']">CRM</div>
          <div className=" text-black font-normal font-['Inter']">Invoicing</div>
          <div className=" text-black font-normal font-['Inter']">Pricing</div>
          <div className=" text-black font-normal font-['Inter']">Website Builder</div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-7 inline-flex">
        <div className=" text-black text-2xl font-semibold font-['Inter']">Company</div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className=" text-black font-normal font-['Inter']">About</div>
          <div className=" text-black font-normal font-['Inter']">Affiliate Program</div>
          <div className=" text-black font-normal font-['Inter']">Career</div>
          <div className=" text-black font-normal font-['Inter']">Newsletter</div>
          <div className=" text-black font-normal font-['Inter']">Privacy Policy</div>
          <div className=" text-black font-normal font-['Inter']">Terms of Service</div>
        </div>
      </div>
    </div>
    <div className="justify-start items-center gap-2 inline-flex">
      <div className="w-32 h-5 text-black text-3xl font-semibold font-['Inter']">powerpro</div>
    </div>
  </div>
</div>
  )
}

export default Footer