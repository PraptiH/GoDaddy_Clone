type Mobile = {
    mobile?:boolean
}

function DomainMegaMenu({mobile}:Mobile) {
    return (
        <>
            <div className={mobile? "flex flex-col gap-": "flex flex-row gap-8"}>
                <div className="m-5">
                    <h5 className="text-base font-medium ">FIND A DOMAIN</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg" >
                                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                            </svg>
                            <p className="text-xl font-medium">Search for Domain Names</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg" >
                                <path d="M16 16H2v2h14v4l6-5-6-5zM8 1 2 6l6 5V7h14V5H8z"></path>
                            </svg>
                            <p className="text-xl font-medium">Transfer Domain Names</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg">
                                <path d="M8 11h13v2H8zm0-5h13v2H8zm0 10h13v2H8zM3 5.5h3v3H3zm0 5h3v3H3zm0 5h3v3H3z"></path>
                            </svg>
                            <p className="text-xl font-medium">GTLD Domain Extensions</p>
                        </div>
                    </div>

                </div>

                <div className="m-5">
                    <h5 className="text-base font-medium ">DOMAIN INVESTING</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg">
                                <path d="M2 20h13v2H2zM18.71 8.71a.996.996 0 0 0 0-1.41l-5-5a.996.996 0 0 0-1.41 0l-9.01 8.99a.996.996 0 0 0 0 1.41l5 5c.2.2.45.29.71.29s.51-.1.71-.29l3.79-3.79 6.79 6.79 1.41-1.41-6.79-6.79 3.79-3.79Zm-7.21 4.38L7.91 9.5l2.59-2.59 3.59 3.59zM13 4.42l3.59 3.59L15.5 9.1l-3.59-3.59zM9 15.59 5.41 12l1.09-1.09 3.59 3.59z"></path>
                            </svg>
                            <p className="text-xl font-medium">Auctions for Domain Names</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg">
                                <path d="M5 2H2v2h2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4h2V2zm13 18H6V4h12z"></path><path d="M12 15c-1.84 0-1.99-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.09c1.97-.33 3-1.63 3-2.91 0-1.12-.52-3-4-3-2 0-2-.63-2-1 0-.48.7-1 2-1 1.18 0 1.39.64 1.4 1.02l1-.02h1c0-1.03-.67-2.47-2.4-2.88V6h-2v1.09C9.03 7.42 8 8.72 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1 0 .42-.62 1-2 1"></path>
                            </svg>
                            <p className="text-xl font-medium">Appraise Domain Name Value</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg">
                                <path d="M11.71 2.29A1 1 0 0 0 11 2H6c-.27 0-.52.11-.71.29l-3 3A1 1 0 0 0 2 6v5c0 .27.11.52.29.71l10 10c.2.2.45.29.71.29s.51-.1.71-.29l8-8a.996.996 0 0 0 0-1.41zM13 19.58l-9-8.99V6.42l2.41-2.41h4.17l9 9-6.59 6.59Z"></path><path d="M8 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
                            </svg>
                            <p className="text-xl font-medium">Discount Domain Search</p>
                        </div>
                    </div>

                </div>

                <div className="m-5">
                    <h5 className="text-base font-medium ">DOMAIN TOOLS AND SERVICES</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg">
                                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m7.5 7.24c-1.05-.45-2.36-.77-3.76-.97-.2-1.4-.52-2.71-.97-3.76 2.19.81 3.92 2.55 4.73 4.73m-3.55 4.44c.03-.56.05-1.12.05-1.68s-.02-1.12-.05-1.68C18.62 10.79 20 11.64 20 12s-1.39 1.21-4.05 1.68M12 20c-.36 0-1.21-1.39-1.68-4.05.56.03 1.12.05 1.68.05s1.12-.02 1.68-.05C13.21 18.62 12.36 20 12 20m0-6c-.69 0-1.33-.03-1.93-.07-.05-.6-.07-1.24-.07-1.93s.03-1.33.07-1.93c.6-.05 1.24-.07 1.93-.07s1.33.03 1.93.07c.05.6.07 1.24.07 1.93s-.03 1.33-.07 1.93c-.6.05-1.24.07-1.93.07m-8-2c0-.36 1.39-1.21 4.05-1.68C8.02 10.88 8 11.44 8 12s.02 1.12.05 1.68C5.38 13.21 4 12.36 4 12m8-8c.36 0 1.21 1.39 1.68 4.05C13.12 8.02 12.56 8 12 8s-1.12.02-1.68.05C10.79 5.38 11.64 4 12 4m-2.76.5c-.45 1.05-.77 2.36-.97 3.76-1.4.2-2.71.52-3.76.97A8.04 8.04 0 0 1 9.24 4.5M4.51 14.76c1.05.45 2.36.77 3.76.97.2 1.4.52 2.71.97 3.76a8.04 8.04 0 0 1-4.73-4.73m10.26 4.73c.45-1.05.77-2.36.97-3.76 1.4-.2 2.71-.52 3.76-.97a8.04 8.04 0 0 1-4.73 4.73"></path>
                            </svg>
                            <p className="text-xl font-medium">Find a Domain Owner (WHOIS)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg">
                                <path d="m10.5 5 1-.67 1 .67-.33-1.17.83-.71L12 3l-.5-1-.5 1-1 .12.83.71zm9.83 8.67L19.5 12l-.83 1.67-1.67.21 1.39 1.18-.56 1.94 1.67-1.11L21.17 17l-.56-1.94L22 13.88zM4.83 9 6.5 7.89 8.17 9l-.56-1.95L9 5.88l-1.67-.21L6.5 4l-.83 1.67L4 5.88l1.39 1.17zm13.88-6.71a.996.996 0 0 0-1.41 0l-15.01 15a.996.996 0 0 0 0 1.41l3 3c.2.2.45.29.71.29s.51-.1.71-.29l15-15a.996.996 0 0 0 0-1.41zM6 19.59 4.41 18l9.09-9.09 1.59 1.59zm10.5-10.5L14.91 7.5 18 4.41 19.59 6z"></path>
                            </svg>
                            <p className="text-xl font-medium">Generate Domain Names</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg" >
                                <path d="M10.5 19c1.98 0 3.81-.69 5.25-1.83L20 21.42l1.41-1.41-4.25-4.25a8.47 8.47 0 0 0 1.83-5.25c0-4.69-3.81-8.5-8.5-8.5S2 5.81 2 10.5 5.81 19 10.5 19m0-15c3.58 0 6.5 2.92 6.5 6.5S14.08 17 10.5 17 4 14.08 4 10.5 6.92 4 10.5 4"></path>
                            </svg>
                            <p className="text-xl font-medium">Bulk Domain Search</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DomainMegaMenu