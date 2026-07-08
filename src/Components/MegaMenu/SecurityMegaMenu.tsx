type Mobile ={
    mobile?:boolean
}

function SecurityMegaMenu({mobile}:Mobile) {
    return (
        <>
            <div className={mobile? "flex flex-col gap-4": "flex flex-row gap-8"}>
                <div className="m-5">
                    <h5 className="text-base font-medium ">WEB SECURITY</h5>
                    <div className="flex flex-col gap-10 mt-5">
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24"
                                transform="scale(-1,1) "
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="m21.49 8.72-1.2-.7-.71-.41v-2.2c0-.55-.45-1-1-1h-2.2l-.41-.71-.7-1.2a1 1 0 0 0-1.37-.37l-1.21.7-.7.41-.7-.41-1.2-.7c-.48-.28-1.09-.11-1.37.37l-.7 1.2-.41.71h-2.2c-.55 0-1 .45-1 1v2.2l-.71.41-1.2.7a1 1 0 0 0-.37 1.37L3.23 12l-.41.7-.7 1.21a1 1 0 0 0 .37 1.37l1.2.7.71.41v2.2c0 .55.45 1 1 1h2.2l.41.71.7 1.2c.19.32.52.5.87.5.17 0 .34-.04.5-.13l1.2-.7.7-.41.7.41 1.21.7c.23.13.5.17.76.1s.47-.24.61-.47l.7-1.2.41-.7h2.2c.55 0 1-.45 1-1v-2.2l.71-.41 1.2-.7c.48-.28.64-.89.37-1.37l-.7-1.21-.41-.7 1.1-1.91c.28-.48.11-1.09-.37-1.37Zm-1.87 5.32-.34.2-.79.45-.42.24-.5.29v2.35h-2.35l-.83 1.44-.35.6-.34-.2-.99-.57-.21-.12-.5-.29-.5.29-.41.24-.8.46-.34.2-.66-1.13-.53-.91H6.41v-2.35l-.5-.29-.62-.36-.58-.34-.34-.2.89-1.54.29-.5-.29-.5-.13-.23-.56-.97-.2-.34.34-.2.58-.34.62-.36.5-.29V6.42h2.35l.53-.91.66-1.13.34.2.8.46.41.24.5.29.5-.29.21-.12.99-.57.34-.2.35.6.83 1.44h2.35v2.35l.5.29.42.24.79.46.34.2-.2.34-.99 1.71.99 1.71.2.34Z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">SSL Certificates</p>
                                <p>Show visitors your siteis encrypted and trustworthy.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24"
                                className="bg-[#D8EFEF] p-2 w-15 h-12 rounded-lg">
                                <path d="M6 22h12c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-1V7c0-2.76-2.24-5-5-5S7 4.24 7 7v2H6c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2M9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v2H9zm-3 4h12v9H6z"></path>
                            </svg>
                            <div>
                                <p className="text-xl font-medium">Website Security</p>
                                <p>Comprehensive protection to help defend your site from threats.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SecurityMegaMenu