import logo from '../../assets/GODADDY_AIRO_LOGO_WHITE.svg'
import bgImg from '../../assets/Domain-marquee-desktop.avif'
import bgImgMobile from '../../assets/Domain-marquee-mobile.avif'
import domainLogo from '../../assets/domain-logo.svg'
import { useState } from 'react';

function HeroSection() {

    const [isClicked, setIsClicked] = useState(false);
    const [isClickedBanner, setIsClickedBanner] = useState(false);

    return (
        <>
            <div className=" bg-[#f7f8ff]  rounded-2xl">
                <div className='px-4 py-2 lg:p-3 flex items-center justify-around'>
                    <div onFocus={() => setIsClicked(true)} onBlur={() => setIsClicked(false)}
                        className='relative w-full lg:w-9/12 m-0 lg:ml-15'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" color="gray"
                            fill="currentColor" viewBox="0 0 24 24"
                            className={`absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block 
                            ${isClicked ? 'opacity-0 ' : 'opacity-100'}`}>
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>

                        <input className={`w-full lg:text-2xl text-lg font-bold rounded-xl py-5 bg-white shadow-2xl focus:outline-blue-700 transition-all duration-200
                                ${isClicked ? "lg:pl-2 lg:pr-80" : "pl-4 lg:pl-18 lg:pr-80"}`} type="text"

                            placeholder='Type the domain you want' />

                        <button className='absolute top-1/2 -translate-y-1/2 right-0 lg:right-2 bg-[#09757A] flex items-center gap-2
                         text-white text-base font-medium rounded-r-xl lg:rounded-lg p-6 lg:px-4 lg:py-5 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                            </svg>
                            <span className='hidden lg:block md:block'>Search Domains</span>
                        </button>
                    </div>

                    <div className='hidden lg:flex items-center border border-transparent hover:border hover:border-gray-300 rounded-xl cursor-pointer p-4 gap-5 group'>
                        <img src={domainLogo} alt="" />
                        <div>
                            <p className='font-semibold group-hover:text-[#09757A]'>$1.99/1st yr.</p>
                            <p className=' text-xs'>Your .xyz domain name is waiting.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden lg:block relative text-white h-150 overflow-hidden mx-8 lg:mx-15 md:mx-15 my-10'>
                <img className='object-cover h-150 rounded-2xl' src={bgImg} alt="" />
                <div className='w-full absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5'>
                    <img className='w-1/5' src={logo} alt="" />
                    <h3 className='font-bold text-[42px]'>Get a .com for only $0.01/1st yr — includes Airo™</h3>
                    <p className='font-medium text-lg'>3-year purchase required. Additional years $22.99</p>
                </div>

                <div onFocus={() => setIsClickedBanner(true)} onBlur={() => setIsClickedBanner(false)}
                    className='absolute w-full top-2/3 -translate-y-4/5 left-1/2 -translate-x-1/2 lg:w-9/12'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" color="gray"
                        fill="currentColor" viewBox="0 0 24 24"
                        className={`absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block md:block
                            ${isClickedBanner ? 'opacity-0 ' : 'opacity-100'}`}>
                        <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                    </svg>

                    <input className={`w-full text-gray-900 text-2xl font-bold rounded-xl py-7 bg-white shadow-2xl focus:outline-blue-700 transition-all duration-200
                                     ${isClickedBanner ? "pl-2 pr-80" : "pl-4 md:pl-18 lg:pl-18 md:pr-80 lg:pr-80"}`} type="text"
                        placeholder='Type the domain you want' />

                    <button className='absolute top-1/2 -translate-y-1/2 right-0 md:right-2 lg:right-2 bg-[#141414] flex items-center gap-2
                         text-white text-base font-medium rounded-r-xl lg:rounded-lg md:rounded-lg p-6 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>
                        <span className='hidden lg:block md:block'>Claim your .com</span>
                    </button>
                </div>
            </div>

            <div className='block lg:hidden relative text-white h-150 overflow-hidden mx-5 my-10'>
                <img className='object-cover h-150 rounded-2xl w-full' src={bgImgMobile} alt="" />
                <div className='w-11/12 absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-5 mx-auto'>
                    <img src={logo} alt="" />
                    <h3 className='font-bold text-3xl '>Get a .com for only $0.01/1st yr — includes Airo™</h3>
                    <p className='font-medium text-lg'>3-year purchase required. Additional years $22.99</p>
                </div>

                <div
                    className='absolute w-19/20 top-3/5 translate-y-2/5 md:-translate-y-1/2 left-1/2 -translate-x-1/2 '>


                    <input className="w-full text-gray-900 text-base font-bold rounded-lg py-5 placeholder:translate-x-3 bg-white shadow-2xl focus:outline-blue-700 transition-all duration-200"
                                      type="text"
                        placeholder='Type the domain you want' />

                    <button className='absolute md:top-1/2 top-2/5 -translate-y-2/5 md:-translate-y-1/2 right-0 bg-[#141414] flex items-center gap-2
                         text-white text-base font-medium rounded-r-lg p-5 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>
                        <span className='hidden lg:block md:block'>Claim your .com</span>
                    </button>
                </div>
            </div>


        </>
    )
}
export default HeroSection