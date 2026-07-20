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
        <div className={` absolute top-0 left-0 w-full h-full flex flex-col bg-[#f5f7f8] transition-transform duration-300 scrollbar-thumb-white
                ${currentScreen === "submenu" ? "translate-x-0" : "translate-x-full"}`} >

            {/* Header */}
            <div className="p-5  cursor-pointer"
                onClick={goBack} >
                <svg className="w-8 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 511.93">
                    <path fill-rule="nonzero" d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z" />
                </svg>


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