import logoBlack from '../../assets/GoDaddy-Icon-Black-Logo.wine.svg'
import meganav from '../../assets/img-meganav-all-hosting.webp'

type Mobile = {
    mobile?: boolean
}

function HostingMegaMenu({ mobile }: Mobile) {
    return (
        <>
            <div className={mobile ? "flex flex-col gap-4" : "grid grid-cols-3 px-18 my-10"}>
                <div>
                    <h5 className="text-xs font-semibold">HOSTING</h5>
                    <div className="flex flex-col gap-8 mt-5">
                        <div className="flex items-start gap-2 cursor-pointer hover:bg-[#F5F5F5] p-1.5 rounded-xl mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                transform="scale(-1,1) "
                                className="bg-[#d8efef] p-2.5 rounded-xl w-10 h-10">
                                <path d="M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M4 19v-4h16v4z"></path><path d="M17 16h2v2h-2zm-3 0h2v2h-2zm6-13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 9V5h16v4z"></path><path d="M17 6h2v2h-2zm-3 0h2v2h-2z"></path>
                            </svg>
                            <div className='space-y-1'>
                                <p className="text-base font-medium">Web hosting</p>
                                <p className="text-xs">Enjoy fast, reliable, secure hosting.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 cursor-pointer hover:bg-[#F5F5F5] p-1.5 rounded-xl mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                transform="scale(-1,1) "
                                className="bg-[#d8efef] p-2.5 rounded-xl w-10 h-10">
                                <path d="M20 13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M4 19v-4h16v4z"></path><path d="M17 16h2v2h-2zm-3 0h2v2h-2zm6-13H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 9V5h16v4z"></path><path d="M17 6h2v2h-2zm-3 0h2v2h-2z"></path>
                            </svg>
                            <div className='space-y-1'>
                                <p className="text-base font-medium">Hosting for WordPress</p>
                                <p className="text-xs">Hassle-free, fully-managed WordPress.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 cursor-pointer hover:bg-[#F5F5F5] p-1.5 rounded-xl mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#d8efef] p-2.5 rounded-xl w-10 h-10">
                                <path d="M12 3C7.66 3 4 4.83 4 7v10c0 2.17 3.66 4 8 4s8-1.83 8-4V7c0-2.17-3.66-4-8-4m0 2c3.68 0 5.91 1.49 6 2-.09.51-2.32 2-6 2S6.07 7.49 6 7.01C6.07 6.51 8.31 5 12 5M6 9.61c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V12c-.07.5-2.31 2-6 2s-5.93-1.51-6-2zM12 19c-3.69 0-5.93-1.51-6-2v-2.39c1.48.85 3.64 1.39 6 1.39s4.52-.55 6-1.39V17c-.07.5-2.31 2-6 2"></path>
                            </svg>
                            <div className='space-y-1'>
                                <p className="text-base font-medium">Virtual Private Server</p>
                                <p className="text-xs">Get full control with root access and dedicated resources.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <h5 className="text-xs font-semibold">TOOLS FOR AGENCIES</h5>
                    <div className="flex flex-col gap-8 mt-5">
                        <div className="flex items-start gap-2 cursor-pointer hover:bg-[#F5F5F5] p-1.5 rounded-xl mx-2">
                            <img className="bg-[#D8EFEF] p-1 w-12 h-10 rounded-xl object-contain" src={logoBlack} alt="" />
                            <div className='space-y-1'>
                                <p className="text-base font-medium">DomainBd Agency Partner Program</p>
                                <p className="text-xs">Help grow your agency with our trusted partner.</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='space-y-3 group cursor-pointer'>
                    <div className="w-11/12 h-10/12 overflow-hidden rounded-lg shadow-md">
                        <img src={meganav} className="object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                    </div>
                    <p className='font-semibold text-lg group-hover:underline'>What is web hosting? Complete beginner's guide</p>
                </div>
            </div>
        </>
    )
}

export default HostingMegaMenu