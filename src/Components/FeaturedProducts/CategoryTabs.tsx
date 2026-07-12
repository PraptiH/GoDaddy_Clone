function CategoryTabs() {
    return (
        <>
            <div className="flex items-center md:justify-center lg:justify-center gap-5 font-medium pt-20 overflow-x-auto lg:overflow-x-hidden md:overflow-x-hidden">
                <p className="bg-black text-xs text-white rounded-l-full rounded-r-full px-6 py-3 relative transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:z-10">Domains</p>
                <p className="text-xs border text-nowrap border-gray-500 relative transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:z-10 hover:border-black rounded-l-full rounded-r-full px-6 py-3">AI Tools</p>
                <p className="text-xs border border-gray-500 relative transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:z-10 hover:border-black rounded-l-full rounded-r-full px-6 py-3">Recommended</p>
                <p className="text-xs border text-nowrap border-gray-500 relative transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:z-10 hover:border-black rounded-l-full rounded-r-full px-6 py-3">WordPress and Security</p>
            </div>
        </>
    )
}

export default CategoryTabs