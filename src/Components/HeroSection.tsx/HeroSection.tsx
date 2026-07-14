import logo from '../../assets/GODADDY_AIRO_LOGO_WHITE.svg'
import bgImg from '../../assets/Domain-marquee-desktop.avif'
import domainLogo from '../../assets/domain-logo.svg'
function HeroSection() {
    return (
        <>
            <div className=" bg-[#f0f5f5]  rounded-2xl">
                <div className='p-5 flex items-center justify-around'>
                    <div className='relative w-full lg:w-9/12 m-0 lg:ml-15'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" color="gray"
                            fill="currentColor" viewBox="0 0 24 24"
                            className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block md:block">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>

                        <input className='w-full lg:text-2xl text-lg font-bold rounded-xl py-6 lg:py-8 pl-4 md:pl-18 md:pr-80 lg:pl-18 lg:pr-80 bg-white shadow-2xl focus:outline-blue-700' type="text"
                            placeholder='Type the domain you want' />

                        <button className='absolute top-1/2 -translate-y-1/2 right-0 md:right-4 lg:right-4 bg-[#09757A] flex items-center gap-3
                         text-white text-2xl rounded-r-xl lg:rounded-lg md:rounded-lg px-6 py-6 lg:px-5 lg:py-4 md:px-5 md:py-4 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                            </svg>
                            <span className='hidden lg:block md:block'>Search Domains</span>
                        </button>
                    </div>

                    <div className='hidden lg:flex items-center hover:border hover:border-gray-300 rounded-xl cursor-pointer p-4 gap-5 group'>
                        <img src={domainLogo} alt="" />
                        <div>
                            <p className='font-bold group-hover:text-[#09757A]'>$1.99/1st yr.</p>
                            <p className='font-[450px] text-[16px]'>Your .xyz domain name is waiting.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative text-white h-150 overflow-hidden mx-8 lg:mx-15 md:mx-15 my-10'>
                <img className='object-cover h-150 rounded-2xl' src={bgImg} alt="" />
                <div className='w-full absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5'>
                    <img className='w-1/5' src={logo} alt="" />
                    <h3 className='font-bold text-5xl'>Get a .com for only $0.01/1st yr — includes Airo™</h3>
                    <p className='font-medium text-xl'>3-year purchase required. Additional years $22.99</p>
                </div>

                <div className='absolute w-full top-2/3 -translate-y-4/5 left-1/2 -translate-x-1/2 lg:w-9/12'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" color="gray"
                        fill="currentColor" viewBox="0 0 24 24"
                        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block md:block">
                        <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                    </svg>

                    <input className='w-full lg:text-3xl text-gray-900 text-lg font-bold rounded-xl py-7 pl-4 md:pl-18 md:pr-80 lg:pl-18 lg:pr-80 bg-white shadow-2xl focus:outline-blue-700' type="text"
                        placeholder='Type the domain you want' />

                    <button className='absolute top-1/2 -translate-y-1/2 right-0 md:right-4 lg:right-4 bg-black flex items-center gap-3
                         text-white text-2xl rounded-r-xl lg:rounded-lg md:rounded-lg px-6 py-6 lg:px-5 lg:py-4 md:px-5 md:py-4 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>
                        <span className='hidden lg:block md:block'>Search Domains</span>
                    </button>
                </div>
            </div>

           
        </>
    )
}
export default HeroSection