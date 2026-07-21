import register from '../../assets/HP-rtb-largest-registrar.webp'
import security from '../../assets/HP-rtb-security.webp'
import globe from '../../assets/globe-green-1.svg'
import server from '../../assets/img-hp-rtb-card-server.svg'
import tools from '../../assets/HP-rtb-tools-for-every-first-landscape.webp'
import toolsMobile from '../../assets/HP-tools-for-every-first-portrait.webp'

function WhyWork() {
    return (
        <>
            <div>
                <div className=" space-y-5 w-full md:w-4/5 lg:w-2/5 mx-auto mt-15 text-center">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">Why work with GoDaddy?</h1>
                    <p className="text-lg lg:px-8">82+ million domains, 20+ million customers, millions of websites, email and security — we help grow businesses.</p>
                </div>

                <div className='h-full px-4 lg:px-15 py-12 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 lg:gap-8'>
                    <div className='relative'>
                        <img className='rounded-2xl w-full h-95 lg:h-125 md:h-70 object-cover' src={register} alt="" />
                        <p className='absolute md:top-5 top-8 font-bold text-2xl md:text-lg lg:text-3xl tracking-wide md:px-4 px-8'>We offer a huge selection of domains, .com to .xyz</p>
                    </div>
                    <div className='relative'>
                        <img className='rounded-2xl w-full h-95 lg:h-125 md:h-70 object-cover' src={security} alt="" />
                        <p className='absolute md:top-5 top-8 font-bold text-2xl md:text-lg lg:text-3xl tracking-wide md:px-4 px-8'>Zzzz... security to help you sleep easy every night</p>
                    </div>
                    
                    <div className='relative md:px-4 px-8 flex flex-col justify-center gap-4 lg:gap-0 md:gap-0 h-60 lg:h-125 md:h-70 bg-slate-100 rounded-2xl'>
                        <img className='w-8 md:w-10 lg:w-12' src={globe} alt="" />
                        <p className='font-bold text-lg lg:text-3xl tracking-wide'>More than URLs. 20+ million trust us for their domains and more</p>
                    </div>
                    <div className='relative md:px-4 px-8 flex flex-col justify-center gap-4 lg:gap-0 md:gap-0 h-60 lg:h-125 md:h-70 bg-slate-100 rounded-2xl'>
                        <img className='w-8 md:w-10 lg:w-12' src={server} alt="" />
                        <p className='font-bold text-lg lg:text-3xl tracking-wide'>Smart technology that expands from local to global markets</p>
                    </div>

                    <div className='relative hidden lg:block md:block lg:col-span-2 md:col-span-2'>
                        <img className='rounded-2xl w-full lg:h-125 md:h-70 object-cover' src={tools} alt="" />
                        <p className='absolute top-1/2 -translate-y-1/2 font-bold text-lg lg:text-3xl tracking-wide w-2/5 pl-4 lg:pl-8'>Tools for every small business first — websites, email, marketing, and more</p>
                    </div>

                    <div className='relative block lg:hidden md:hidden'>
                        <img className='rounded-2xl w-full h-105 lg:h-125 md:h-70 object-cover' src={toolsMobile} alt="" />
                        <p className='absolute top-8 font-bold text-lg  w-4/5 tracking-wide px-8 '>Tools for every small business first — websites, email, marketing, and more</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyWork