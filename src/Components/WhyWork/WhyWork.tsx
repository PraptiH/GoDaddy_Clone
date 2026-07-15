import register from '../../assets/HP-rtb-largest-registrar.webp'
import security from '../../assets/HP-rtb-security.webp'
import globe from '../../assets/globe-green-1.svg'
import server from '../../assets/img-hp-rtb-card-server.svg'
import tools from '../../assets/HP-rtb-tools-for-every-first-landscape.webp'

function WhyWork() {
    return (
        <>
            <div>
                <div className=" space-y-5 w-2/5 mx-auto text-center">
                    <h1 className="font-bold text-5xl text-center">Why work with GoDaddy?</h1>
                    <p className="text-lg px-8">82+ million domains, 20+ million customers, millions of websites, email and security — we help grow businesses.</p>
                </div>

                <div className='h-full px-15 py-12 grid grid-cols-3 gap-8'>
                    <div className='relative'>
                        <img className='rounded-2xl w-full h-125 object-cover' src={register} alt="" />
                        <p className='absolute top-8 font-bold text-3xl tracking-wide px-8'>We offer a huge selection of domains, .com to .xyz</p>
                    </div>
                    <div className='relative'>
                        <img className='rounded-2xl w-full h-125 object-cover' src={security} alt="" />
                        <p className='absolute top-8 font-bold text-3xl tracking-wide px-8'>Zzzz... security to help you sleep easy every night</p>
                    </div>
                    
                    <div className='relative px-8 flex flex-col justify-center h-125 bg-slate-100 rounded-2xl'>
                        <img className='w-12' src={globe} alt="" />
                        <p className='font-bold text-3xl tracking-wide'>More than URLs. 20+ million trust us for their domains and more</p>
                    </div>
                    <div className='relative px-8 flex flex-col justify-center h-125 bg-slate-100 rounded-2xl'>
                        <img className='w-12' src={server} alt="" />
                        <p className='font-bold text-3xl tracking-wide'>Smart technology that expands from local to global markets</p>
                    </div>

                    <div className='relative col-span-2'>
                        <img className='rounded-2xl w-full h-125 object-cover' src={tools} alt="" />
                        <p className='absolute top-1/2 -translate-y-1/2 font-bold text-3xl tracking-wide w-2/5 pl-8'>Tools for every small business first — websites, email, marketing, and more</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyWork