import DomainMegaMenu from "./DomainMegaMenu"
import HostingMegaMenu from "./HostingMegaMenu"
import MarketingMegaMenu from "./MarketingMegaMenu"
import SecurityMegaMenu from "./SecurityMegaMenu"
import WebsiteMegaMenu from "./WebsiteMegaMenu"

type Props = {
    activeMenu: string | null
}

function MegaMenu({ activeMenu }: Props) {

    return (
        <div className={` absolute w-full bg-white z-50 shadow-xl origin-top transition-all duration-300
        ${activeMenu
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-100 pointer-events-none"}
    `}>
            {
                activeMenu === "Domains" && <DomainMegaMenu />
            }
            {
                activeMenu === "Websites" && <WebsiteMegaMenu />
            }
            {
                activeMenu === "Hosting" && <HostingMegaMenu />
            }
            {
                activeMenu === "Marketing" && <MarketingMegaMenu />
            }
            {
                activeMenu === "Security" && <SecurityMegaMenu />
            }
        </div>
    )
}

export default MegaMenu