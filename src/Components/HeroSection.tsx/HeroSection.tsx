import logo from '../../assets/logo.png'
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


            <div className="text-white relative overflow-hidden bg-linear-to-br from-indigo-500 to-violet-900 h-150 p-5 mx-8 lg:mx-15 md:mx-15 my-10 rounded-2xl">
                <div className='absolute top-1/6 translate-y-1/5 -translate-x-2 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 space-y-10'>
                    <div className='flex flex-wrap items-center justify-center gap-5 '>
                        <img className='w-15 lg:w-24' src={logo} alt="" />
                        <p className='text-3xl lg:text-4xl md:text-4xl font-bold'>DomainBD</p>
                    </div>

                    <div>
                        <h1 className='font-bold text-2xl lg:text-3xl md:text-3xl text-center'>Your domain unlocks everything, get a .com for just Tk 1.23/1st yr</h1>
                    </div>
                </div>


                <div className='relative w-full lg:w-8/12 top-2/5 translate-y-30 mx-auto'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" color="gray"
                            fill="currentColor" viewBox="0 0 24 24"
                            className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block md:block">
                            <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                        </svg>

                        <input className='w-full lg:text-2xl text-gray-800 text-lg font-bold rounded-xl py-6 lg:py-8 pl-4 md:pl-18 md:pr-80 lg:pl-18 lg:pr-80 bg-white shadow-2xl focus:outline-blue-700' type="text" 
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