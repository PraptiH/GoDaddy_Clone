type Data = {
    title: string,
    description: string,
    isActive: boolean,
    onHover: () => void
}

function WebsiteMarketingCard({ title, description, isActive, onHover }: Data) {
    return (
        <>

            <div onMouseEnter={onHover}
                className={`cursor-pointer rounded-xl p-6 transition-all duration-300
        ${isActive ? 'bg-gray-200' : ''}`}>
                <div className="space-y-2">
                    <h3 className="font-semibold text-3xl">{title}</h3>
                    <p className="text-base tracking-wide">{description}</p>
                </div>
            </div>
        </>
    )
}

export default WebsiteMarketingCard