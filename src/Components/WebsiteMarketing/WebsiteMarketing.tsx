import { useState } from "react"
import marketingInfo from "./WebsiteMarketingData"
import WebsiteMarketingCard from "./WebsiteMarketingCard"

function WebsiteMarketing() {

    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <>
            <div className="w-10/12 mx-auto my-25">
                <h1 className="text-center font-bold text-5xl">Grow your brand with Websites + Marketing.</h1>
                <img className="mt-15 rounded-2xl" src={marketingInfo[activeIndex].image} alt="" />

                <div className="mt-5 flex  justify-center gap-5 ">
                    {
                        marketingInfo.map((info, index) => (
                            <WebsiteMarketingCard
                                key={info.title}
                                title={info.title}
                                description={info.description}
                                isActive={activeIndex === index}
                                onHover={() => setActiveIndex(index)}
                            />
                        ))
                    }
                </div>

                <button className="bg-black text-white w-1/7 mx-auto mt-10 group cursor-pointer object-cover py-4 rounded-lg flex items-center justify-center transition-all ease-in duration-500 hover:scale-x-102">Start For Free
                    <svg className="hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="35" height="24"
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z"></path>
                    </svg>
                </button>

            </div>
        </>
    )
}

export default WebsiteMarketing