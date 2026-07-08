type Mobile = {
    mobile?:boolean
}

function WebsiteMegaMenu({mobile}:Mobile) {
    return (
        <>
            <div className={mobile? "flex flex-col gap-4": "flex flex-row gap-8"}>
                <div className="m-5">
                    <h5 className="text-base font-medium">DOMAINBD WEBSITE BUILDER</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-12 h-12 rounded-lg rotate-y-180">
                                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M4 5h16v4H4zm0 14v-8h16v8z"></path><path d="M14 6h2v2h-2zm3 0h2v2h-2z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Website Builder</p>
                                <p>Create free site with built-in marketing tools.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="m12 12-1-1-2 3h10l-4-6z"></path><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 16V4h12v12z"></path><path d="M4 8H2v12c0 1.1.9 2 2 2h12v-2H4z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Airo AI Builder</p>
                                <p>Your conversational business companion that build customized sites and web apps in minutes.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="M19.1 2.8c-.38-.5-.97-.8-1.6-.8h-11c-.63 0-1.22.3-1.6.8L2.2 6.4c-.13.17-.2.38-.2.6v1c0 1.04.41 1.98 1.06 2.69-.03.1-.06.2-.06.31v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9c0-.11-.03-.21-.06-.31C21.59 9.98 22 9.04 22 8V7c0-.22-.07-.43-.2-.6zm.9 4.53V8c0 1.1-.9 2-2 2s-2-.9-2-2V7q0-.12-.03-.24L15.28 4h2.22zM10.78 4h2.44L14 7.12V8c0 1.1-.9 2-2 2s-2-.9-2-2v-.88zM4 7.33 6.5 4h2.22l-.69 2.76Q8 6.88 8 7v1c0 1.1-.9 2-2 2s-2-.9-2-2zM10 20v-4h4v4zm6 0v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4H5v-8.14c.32.08.65.14 1 .14 1.2 0 2.27-.54 3-1.38.73.84 1.8 1.38 3 1.38s2.27-.54 3-1.38c.73.84 1.8 1.38 3 1.38.35 0 .68-.06 1-.14V20z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Online Store</p>
                                <p>Sell products, services and let customers book appointments in online.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="m-5">
                    <h5 className="text-base font-medium">AI BUILDER</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="m10.5 5 1-.67 1 .67-.33-1.17.83-.71L12 3l-.5-1-.5 1-1 .12.83.71zm9.83 8.67L19.5 12l-.83 1.67-1.67.21 1.39 1.18-.56 1.94 1.67-1.11L21.17 17l-.56-1.94L22 13.88zM4.83 9 6.5 7.89 8.17 9l-.56-1.95L9 5.88l-1.67-.21L6.5 4l-.83 1.67L4 5.88l1.39 1.17zm13.88-6.71a.996.996 0 0 0-1.41 0l-15.01 15a.996.996 0 0 0 0 1.41l3 3c.2.2.45.29.71.29s.51-.1.71-.29l15-15a.996.996 0 0 0 0-1.41zM6 19.59 4.41 18l9.09-9.09 1.59 1.59zm10.5-10.5L14.91 7.5 18 4.41 19.59 6z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Airo AI Builder</p>
                                <p>Your conversational business companion that build customized sites and web apps in minutes</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="m-5">
                    <h5 className="text-base font-medium">HIRE AN EXPERT</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="M18.71 5.29a.996.996 0 0 0-1.41 0l-11 11a1 1 0 0 0-.29.71v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41l-3-3ZM9.59 19H8v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L16.91 8.5 18 7.41 19.59 9zm-10.73.06C9.5 8.72 11 7.49 11 6c0-3.81-7.5-4-9-4v2c3.31 0 7 .83 7 2 0 .54-1.51 1.78-2.5 2.6-2.06 1.7-4.4 3.63-4.24 6.07.09 1.4 1 2.67 2.74 3.86V17c0-.3.07-.59.2-.85-.59-.56-.91-1.1-.94-1.61-.09-1.41 1.83-3 3.52-4.39Z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Website Design Services</p>
                                <p>Let our experts design and build your custom site</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default WebsiteMegaMenu