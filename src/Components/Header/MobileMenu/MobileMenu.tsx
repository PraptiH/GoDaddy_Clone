import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuButton from "../MenuButton";
import SubMenu from "./SubMenu";
import logo from "../../../assets/logo-black.png"

type Props = {
    isMenuOpen: boolean;
    closeMenu: () => void;
};

function MobileMenu({ isMenuOpen, closeMenu }: Props) {
    const [currentScreen, setCurrentScreen] = useState<"main" | "submenu">("main");
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const handleMenuClick = (menuName: string) => {
        setActiveMenu(menuName);
        setCurrentScreen("submenu");
    };

    const goBack = () => {
        setCurrentScreen("main");
        setActiveMenu(null);
    };

    return (
        <>

            {isMenuOpen && (
                <div className="lg:hidden" onClick={closeMenu} />
            )}

            {/* Sidebar  */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-black z-1 overflow-hidden transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b">
                    <div className="flex items-center">
                        {currentScreen === "main" ? (
                            <div className="flex items-center gap-3">
                                <img className="w-10" src={logo} alt="DomainBD Logo" />
                                <h2 className="text-xl font-bold">DomainBD</h2>
                            </div>
                        ) : (
                            <h2 className="text-xl font-bold">{activeMenu}</h2>
                        )}
                    </div>

                    <button onClick={closeMenu} className="text-3xl cursor-pointer">
                        &times;
                    </button>
                </div>

                {/* Main Menu */}
                <div className={` absolute top-18 left-0 w-full h-[calc(100%-73px)] overflow-y-auto
                        bg-white transition-transform duration-300 font-medium
                        ${currentScreen === "main"
                        ? "translate-x-0"
                        : "-translate-x-full"
                    } `}>

                    <div className="flex flex-col gap-6 p-6">

                        <MenuButton
                            name="Domains"
                            activeMenu={activeMenu}
                            clickMenu={handleMenuClick}
                        />

                        <MenuButton
                            name="Websites"
                            activeMenu={activeMenu}
                            clickMenu={handleMenuClick}
                        />

                        <MenuButton
                            name="Hosting"
                            activeMenu={activeMenu}
                            clickMenu={handleMenuClick}
                        />

                        <MenuButton
                            name="Marketing"
                            activeMenu={activeMenu}
                            clickMenu={handleMenuClick}
                        />

                        <MenuButton
                            name="Security"
                            activeMenu={activeMenu}
                            clickMenu={handleMenuClick}
                        />

                        <NavLink to="/email" onClick={closeMenu}>
                            Email
                        </NavLink>

                        <NavLink to="/aiBuilder" onClick={closeMenu}>
                            Ario AI Builder
                        </NavLink>

                        <NavLink to="/pricing" onClick={closeMenu}>
                            Pricing
                        </NavLink>

                        <NavLink to="/deals" onClick={closeMenu}>
                            Deals
                        </NavLink>

                        <NavLink to="/contact" onClick={closeMenu}>
                            Contact Us
                        </NavLink>

                        <NavLink to="/help" onClick={closeMenu}>
                            Help
                        </NavLink>

                        <NavLink to="/signIn" onClick={closeMenu}>
                            Sign In
                        </NavLink>
                    </div>
                </div>

                {/* Sub Menu */}
                <SubMenu
                    currentScreen={currentScreen}
                    activeMenu={activeMenu}
                    goBack={goBack}
                />
            </div>
        </>
    );
}

export default MobileMenu;