import DomainMegaMenu from "../../MegaMenu/DomainMegaMenu";
import HostingMegaMenu from "../../MegaMenu/HostingMegaMenu";
import MarketingMegaMenu from "../../MegaMenu/MarketingMegaMenu";
import SecurityMegaMenu from "../../MegaMenu/SecurityMegaMenu";
import WebsiteMegaMenu from "../../MegaMenu/WebsiteMegaMenu";


type Props = {
    currentScreen: "main" | "submenu";
    activeMenu: string | null;
    goBack: () => void;
};

function SubMenu({ currentScreen, activeMenu, goBack, }: Props) {

    return (
        <div className={` absolute top-0 left-0 w-full h-full flex flex-col bg-white transition-transform duration-300
                ${currentScreen === "submenu" ? "translate-x-0" : "translate-x-full" }`} >

            {/* Header */}
            <div className="flex items-center gap-3 p-5 border-b cursor-pointer"
                onClick={goBack} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="m15.41 7.41-1.41-1.41L8.59 11.41l5.41 5.41 1.41-1.41L11.41 12z" />
                </svg>

                <span className="font-semibold text-lg">
                    {activeMenu}
                </span>
            </div>

            {/* Content */}
            <div className=" p-5 overflow-y-auto">

                {activeMenu === "Domains" && <DomainMegaMenu mobile />}

                {activeMenu === "Websites" && <WebsiteMegaMenu mobile />}

                {activeMenu === "Hosting" && <HostingMegaMenu mobile />}

                {activeMenu === "Marketing" && <MarketingMegaMenu mobile />}

                {activeMenu === "Security" && <SecurityMegaMenu mobile />}

            </div>
        </div>
    );
}

export default SubMenu;