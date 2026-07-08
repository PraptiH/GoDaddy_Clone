import DomainMegaMenu from "./DomainMegaMenu"
import HostingMegaMenu from "./HostingMegaMenu"
import MarketingMegaMenu from "./MarketingMegaMenu"
import SecurityMegaMenu from "./SecurityMegaMenu"
import WebsiteMegaMenu from "./WebsiteMegaMenu"

type Props = {
    activeMenu: string | null
}

function MegaMenu({activeMenu}:Props){
    return(
        <div className="absolute z-50 bg-white w-full">
        {
            activeMenu === "Domains" && <DomainMegaMenu/>
        }
        {
            activeMenu === "Websites" && <WebsiteMegaMenu/>
        }
        {
            activeMenu === "Hosting" && <HostingMegaMenu/>
        }
        {
            activeMenu === "Marketing" && <MarketingMegaMenu/>
        }
        {
            activeMenu === "Security" && <SecurityMegaMenu/>
        }
        </div>
    )
}

export default MegaMenu