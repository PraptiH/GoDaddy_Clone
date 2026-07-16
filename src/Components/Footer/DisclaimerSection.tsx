function DisclaimerSection() {

    type TextData = {
        text: string,
        bold?: boolean
    }

    const marqueeText: TextData[] = [
        {
            text: 'GROW YOUR OWN BUSINESS'
        },
        {
            text: 'WEBSITES THAT WRITE THEMSELVES'
        },
        {
            text: 'Social Made Simple',
            bold: true
        },
        {
            text: 'TRUSTED WORLDWIDE'
        },
        {
            text: 'GoDaddy is a great business partner',
            bold: true
        },
    ]

    const duplicateMarqueeText: TextData[] = [...marqueeText, ...marqueeText]

    return (
        <>
            <div className="m-12 space-y-5">
                <p className="font-semibold underline cursor-pointer">**, *** Disclaimers</p>
                <p className="text-base">Third-party logos and marks are registered trademarks of their respective owners. All rights reserved.</p>
            </div>

            <div className=" overflow-hidden py-8 bg-cyan-100">
                <div className="flex items-center gap-5 textMarquee">
                    {
                        duplicateMarqueeText.map((data) => (
                            <div className="flex items-center gap-4">
                                <p className="w-2 h-2 rounded-full bg-black"></p>
                                <p className={`text-nowrap  ${data.bold ?
                                    'font-bold text-2xl' : 'text-xl'
                                    }`}>{data.text}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default DisclaimerSection