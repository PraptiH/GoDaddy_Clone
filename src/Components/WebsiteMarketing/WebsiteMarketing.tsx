import { useRef, useState } from "react";
import marketingInfo, { marketingInfoMobile } from "./WebsiteMarketingData";
import WebsiteMarketingCard from "./WebsiteMarketingCard";

function WebsiteMarketing() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderRef = useRef<HTMLDivElement>(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return;

        isDragging.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;

        sliderRef.current.style.cursor = "grabbing";
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current || !sliderRef.current) return;

        e.preventDefault();

        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;

        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
        if (!sliderRef.current) return;

        isDragging.current = false;
        sliderRef.current.style.cursor = "grab";

        const cards = Array.from(
            sliderRef.current.children
        ) as HTMLDivElement[];

        const currentScroll = sliderRef.current.scrollLeft;

        let nearestCard = cards[0];
        let minDistance = Math.abs(cards[0].offsetLeft - currentScroll);

        cards.forEach((card) => {
            const distance = Math.abs(card.offsetLeft - currentScroll);

            if (distance < minDistance) {
                minDistance = distance;
                nearestCard = card;
            }
        });

        sliderRef.current.scrollTo({
            left: nearestCard.offsetLeft,
            behavior: "smooth",
        });
    };

    const handleMouseLeave = () => {
        if (isDragging.current) {
            handleMouseUp();
        }
    };

    const handleScroll = () => {
        if (!sliderRef.current) return;

        const container = sliderRef.current;
        const cards = Array.from(container.children) as HTMLDivElement[];

        const center = container.scrollLeft + container.clientWidth / 2;

        let active = 0;
        let minDistance = Infinity;

        cards.forEach((card, index) => {
            const cardCenter = card.offsetLeft + card.clientWidth / 2;
            const distance = Math.abs(center - cardCenter);

            if (distance < minDistance) {
                minDistance = distance;
                active = index;
            }
        });

        setActiveSlide(active);
    };

    return (
        <>
            <div className="w-full lg:w-10/12 mx-auto mt-25">
                <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">
                    Grow your brand with Websites + Marketing.
                </h1>

                {/* Desktop */}
                <div className="hidden lg:block">
                    <img className="mt-15 rounded-2xl" src={marketingInfo[activeIndex].image} />

                    <div className="mt-5 flex justify-center gap-5">
                        {marketingInfo.map((info, index) => (
                            <WebsiteMarketingCard
                                key={info.title}
                                title={info.title}
                                description={info.description}
                                isActive={activeIndex === index}
                                onHover={() => setActiveIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile & Tablet */}
                <div className="lg:hidden mt-10 ">
                    <div ref={sliderRef}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        className=" flex gap-5 overflow-x-scroll scroll-smooth scrollbar-hide cursor-grab px-4 lg:px-45 md:px-45 py-5">

                        {marketingInfoMobile.map((info) => (
                            <div key={info.title} className="w-sm md:w-md shrink-0 rounded-xl cursor-pointer bg-slate-100">
                                <img src={info.image} draggable={false} className="w-full rounded-t-xl pointer-events-none" />

                                <div className="py-5 space-y-3 px-3">
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        {info.title}
                                    </h2>

                                    <p className="">
                                        {info.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Indicators */}
                    <div className="mt-8 flex justify-center gap-4">
                        {marketingInfoMobile.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 rounded-full transition-all duration-300 ${activeSlide === index
                                        ? "w-12 bg-black"
                                        : "w-8 bg-gray-100"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                <button className="bg-black text-white px-12 mx-auto mt-10 group cursor-pointer py-4 rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-105">
                    Start For Free

                    <svg className="hidden group-hover:block ml-2" xmlns="http://www.w3.org/2000/svg"
                        width="28" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 13h8.09l-3.3 3.29 1.42 1.42 5.7-5.71-5.7-5.71-1.42 1.42 3.3 3.29H6z" />
                    </svg>
                </button>
            </div>
        </>
    );
}

export default WebsiteMarketing;