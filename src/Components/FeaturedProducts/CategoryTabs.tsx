function CategoryTabs() {
    return (
        <>
            <div className="flex items-center md:justify-center text-center lg:justify-center gap-5 font-medium pt-20 overflow-x-auto lg:overflow-x-hidden md:overflow-x-hidden">
                <p className="bg-black text-white text-sm font-semibold tracking-widest text-nowrap border-2 relative transition-all duration-300 ease-in-out hover:scale-102 rounded-l-full rounded-r-full px-6 py-3 cursor-pointer">Domains</p>
                <p className="text-sm font-semibold tracking-widest text-nowrap border-2 border-gray-300 relative transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#030303] rounded-l-full rounded-r-full px-6 py-3 cursor-pointer">AI Tools</p>
                <p className="text-sm font-semibold tracking-widest text-nowrap border-2 border-gray-300 relative transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#030303] rounded-l-full rounded-r-full px-6 py-3 cursor-pointer">Recommended</p>
                <p className="text-sm font-semibold tracking-widest text-nowrap border-2 border-gray-300 relative transition-all duration-300 ease-in-out hover:scale-102 hover:border-[#030303] rounded-l-full rounded-r-full px-6 py-3 cursor-pointer">WordPress and Security</p>
            </div>
        </>
    )
}

export default CategoryTabs