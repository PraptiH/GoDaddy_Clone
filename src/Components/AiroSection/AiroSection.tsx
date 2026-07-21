import customerDesktop from '../../assets/HP-Customer-desktop.webp'
import customerMobile from '../../assets/HP-Customer-mobile.webp'
import customerThumbnail from '../../assets/HP-Customer-Website-thumbnail.webp'

function AiroSection() {
    return (
        <>
            <div className="relative w-full px-5">
                <h1 className="font-bold text-3xl lg:text-5xl tracking-wide mb-5">Airo every day, all the way</h1>

                <div className='bg-[#f5f7f8] rounded-b-xl'>
                    <img src={customerDesktop}
                        className="w-full rounded-3xl object-cover hidden lg:block" />

                    <img src={customerMobile}
                        className="w-full rounded-t-2xl object-cover block lg:hidden" />

                    <div className="lg:bg-white rounded-3xl p-6 lg:p-10 flex flex-col justify-between
                            lg:absolute lg:right-8 lg:top-1/7 lg:w-[50%] lg:h-[82%]">

                        <h2 className="text-3xl lg:text-2xl font-bold leading-relaxed">
                            “It's my job to make you believe I can do anything. But when it came to building my website, GoDaddy Airo™ stepped in and turned my vision into reality.”
                        </h2>

                        <div className="flex flex-col lg:flex-row md:flex-row gap-8 mt-5">

                            <div className="flex-1 space-y-3">
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24"
                                        className='bg-[#D8EFEF] rounded-xl p-2 w-10'>
                                        <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m7.93 9h-2.95c-.11-2.44-.62-4.58-1.42-6.15A8.01 8.01 0 0 1 19.93 11M12 20c-1.14 0-2.75-2.7-2.97-7h5.94c-.22 4.3-1.84 7-2.97 7m-2.97-9c.22-4.3 1.84-7 2.97-7s2.75 2.7 2.97 7zm-.59-6.15C7.65 6.43 7.13 8.56 7.02 11H4.07a8.01 8.01 0 0 1 4.37-6.15M4.07 13h2.95c.11 2.44.62 4.58 1.42 6.15A8.01 8.01 0 0 1 4.07 13m11.49 6.15c.79-1.58 1.31-3.71 1.42-6.15h2.95a8.01 8.01 0 0 1-4.37 6.15"></path>
                                    </svg>
                                    <p className="text-[15px] font-[550]">Domain Name</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24"
                                        className="bg-[#D8EFEF] rounded-xl p-2 w-10">
                                        <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 5h16v4H4zm0 14v-8h16v8z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path>
                                    </svg>
                                    <p className="text-base font-semibold">Online Store</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24"
                                        className="bg-[#D8EFEF] rounded-xl p-2 w-10">
                                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
                                    </svg>
                                    <p className="text-base font-semibold">Business Email</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24"
                                        className="bg-[#D8EFEF] rounded-xl p-2 w-10">
                                        <path d="M4 19h3v2c0 .36.19.69.51.87a1 1 0 0 0 1-.01L13.27 19h6.72c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M4 5h16v12h-7c-.18 0-.36.05-.51.14L9 19.23V18c0-.55-.45-1-1-1H4z"></path><path d="M8 10a1 1 0 1 0 0 2 1 1 0 1 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2m4 0a1 1 0 1 0 0 2 1 1 0 1 0 0-2"></path>
                                    </svg>
                                    <p className="text-base font-semibold">Conversations</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 24 24"
                                        className="bg-[#D8EFEF] rounded-xl p-2 w-10">
                                        <path d="M18.71 5.29a.996.996 0 0 0-1.41 0l-11 11a1 1 0 0 0-.29.71v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41l-3-3ZM9.59 19H8v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L16.91 8.5 18 7.41 19.59 9zm-10.73.06C9.5 8.72 11 7.49 11 6c0-3.81-7.5-4-9-4v2c3.31 0 7 .83 7 2 0 .54-1.51 1.78-2.5 2.6-2.06 1.7-4.4 3.63-4.24 6.07.09 1.4 1 2.67 2.74 3.86V17c0-.3.07-.59.2-.85-.59-.56-.91-1.1-.94-1.61-.09-1.41 1.83-3 3.52-4.39Z"></path>
                                    </svg>
                                    <p className="text-base font-semibold">GoDaddy App</p>
                                </div>
                            </div>

                            <div className="w-full lg:w-3/5 md:w-1/2">
                                <img
                                    src={customerThumbnail}
                                    className="w-full rounded-xl object-cover hidden lg:block md:block"
                                />
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AiroSection