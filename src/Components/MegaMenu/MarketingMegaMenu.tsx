type Mobile = {
    mobile?:boolean
}

function MarketingMegaMenu({mobile}:Mobile) {
    return (
        <>
            <div className={mobile? "flex flex-col gap-4": "flex flex-row gap-8"}>
                <div className="m-5">
                    <h5 className="text-base font-medium ">MARKETING TOOLS</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="M18 7V3c0-.35-.19-.68-.49-.86a1 1 0 0 0-.99-.01L7.74 7H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h3v6h2v-5.46l7.59 3.37c.13.06.27.09.41.09a1.01 1.01 0 0 0 1-1v-4c2.21 0 4-1.79 4-4s-1.79-4-4-4M4 14V9h3v5zm12 3.46-7-3.11V8.59l7-3.89zM18 13V9c1.1 0 2 .9 2 2s-.9 2-2 2"></path>
                            </svg>

                            <p className="text-xl font-medium">Digital Marketing</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="m10.5 5 1-.67 1 .67-.33-1.17.83-.71L12 3l-.5-1-.5 1-1 .12.83.71zm9.83 8.67L19.5 12l-.83 1.67-1.67.21 1.39 1.18-.56 1.94 1.67-1.11L21.17 17l-.56-1.94L22 13.88zM4.83 9 6.5 7.89 8.17 9l-.56-1.95L9 5.88l-1.67-.21L6.5 4l-.83 1.67L4 5.88l1.39 1.17zm13.88-6.71a.996.996 0 0 0-1.41 0l-15.01 15a.996.996 0 0 0 0 1.41l3 3c.2.2.45.29.71.29s.51-.1.71-.29l15-15a.996.996 0 0 0 0-1.41zM6 19.59 4.41 18l9.09-9.09 1.59 1.59zm10.5-10.5L14.91 7.5 18 4.41 19.59 6z"></path>
                            </svg>

                            <p className="text-xl font-medium">Logo Maker</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24" 
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 2v.51l-8 6.22-8-6.22V6zM4 18V9.04l7.39 5.74c.18.14.4.21.61.21s.43-.07.61-.21L20 9.03v8.96H4Z"></path>
                            </svg>

                            <p className="text-xl font-medium">Unified Inbox</p>
                        </div>
                    </div>

                </div>

                <div className="m-5">
                    <h5 className="text-base font-medium ">TOOLS FOR AGENCIES</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="m10.5 5 1-.67 1 .67-.33-1.17.83-.71L12 3l-.5-1-.5 1-1 .12.83.71zm9.83 8.67L19.5 12l-.83 1.67-1.67.21 1.39 1.18-.56 1.94 1.67-1.11L21.17 17l-.56-1.94L22 13.88zM4.83 9 6.5 7.89 8.17 9l-.56-1.95L9 5.88l-1.67-.21L6.5 4l-.83 1.67L4 5.88l1.39 1.17zm13.88-6.71a.996.996 0 0 0-1.41 0l-15.01 15a.996.996 0 0 0 0 1.41l3 3c.2.2.45.29.71.29s.51-.1.71-.29l15-15a.996.996 0 0 0 0-1.41zM6 19.59 4.41 18l9.09-9.09 1.59 1.59zm10.5-10.5L14.91 7.5 18 4.41 19.59 6z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Airo</p>
                                <p>Launce your brand quickly with a domain, logo, and social media marketing.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default MarketingMegaMenu