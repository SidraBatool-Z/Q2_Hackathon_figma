import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto h-auto xs:h-[781px] mb-[140px] mt-[60px] flex flex-col xs:flex-row items-center justify-center bg-cover" style={{ backgroundImage: 'url(/images/loginpagebg.jpg)' }}>
      <div className="flex flex-col my-auto w-full xs:w-[440px] h-auto xs:h-[600px] gap-6 xs:gap-12 p-4 xs:p-0  md:border-[1px] md:border-white md:p-10 md:rounded-2xl ">
        {/* Heading Section */}
        <div className="flex flex-col gap-4 xs:gap-6 text-white text-center xs:text-left">
          <h1 className="font-Inter text-[28px] xs:text-[36px] font-medium">Create an account</h1>
          <p className="text-sm xs:text-base">Enter your details below</p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-6 xs:gap-10">
          <form className="relative flex flex-col gap-6 xs:gap-10 text-white">
            <div>
              <input
                type="text"
                className="h-10 xs:h-8 outline-none border-none border-b-2 bg-transparent placeholder:text-[rgba(255,255,255,0.8)] w-full"
                placeholder="Name"
              />
              <div className="absolute border border-solid border-[#a2a6b1] w-full h-0" />
            </div>
            <div>
              <input
                type="text"
                className="h-10 xs:h-8 outline-none border-none border-b-2 bg-transparent placeholder:text-[rgba(255,255,255,0.8)] w-full"
                placeholder="Email or Phone Number"
              />
              <div className="absolute border border-solid border-[#a2a6b1] w-full h-0" />
            </div>
            <div>
              <input
                type="password"
                className="h-10 xs:h-8 outline-none border-none border-b-2 bg-transparent placeholder:text-[rgba(255,255,255,0.8)] w-full"
                placeholder="Password"
              />
              <div className="absolute border border-solid border-[#a2a6b1] w-full h-0" />
            </div>
          </form>

          {/* Buttons Section */}
          <div>
            <button className="h-[56px] w-full bg-[#DB4444] text-white rounded text-[14px] xs:text-[16px] font-medium flex items-center justify-center mb-4">
              Create Account
            </button>
            <div className="flex flex-col justify-between gap-4 xs:gap-6 h-auto xs:h-[116px] w-full">
              <button className="h-[56px] rounded bg-transparent border border-[#CCCCCC] text-[14px] bg-white text-black sm:bg-transparent sm:text-white xs:text-[16px] flex items-center justify-center">
                <div className="flex gap-4">
                  <Image
                    priority
                    src="/icons/googleicon.svg"
                    height={24}
                    width={25}
                    alt="googleicon"
                    className="max-w-[22px] max-h-[22px]"
                  />
                  Sign up with Google
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;