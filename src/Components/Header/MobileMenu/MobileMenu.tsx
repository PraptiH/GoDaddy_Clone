import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuButton from "../MenuButton";
import SubMenu from "./SubMenu";
import logo from "../../../assets/GoDaddy-Icon-Black-Logo.wine.svg"

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

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs lg:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar  */}

            <div>
                <div className={`fixed top-0 left-0 h-screen scrollbar-none w-[80%] max-w-2xl overflow-hidden bg-white z-50 transition-transform duration-300
                          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    {/* Header */}
                    <div className="px-5 py-2">

                        {currentScreen === "main" ? (

                            <img className="w-18 " src={logo} />

                        ) : (
                            <h2 className="text-xl font-bold">{activeMenu}</h2>
                        )}


                    </div>

                    {/* Main Menu */}
                    <div className={`absolute top-18 left-0 w-full overflow-y-auto
                        bg-white transition-all duration-500 font-medium
                        ${currentScreen === "main"
                            ? "translate-x-0"
                            : "-translate-x-full"
                        } `}>

                        <div className="h-[calc(100vh-100px)] flex flex-col justify-between px-6">

                            <div className="grid font-semibold space-y-2 text-[18px]">

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

                                <NavLink className="hover:bg-gray-100 rounded-lg " to="/email" onClick={closeMenu}>
                                    Email
                                </NavLink>

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

                                <NavLink className="hover:bg-gray-100 rounded-lg" to="/aiBuilder" onClick={closeMenu}>
                                    Ario AI Builder
                                </NavLink>

                                <NavLink className="hover:bg-gray-100 rounded-lg mt-1" to="/pricing" onClick={closeMenu}>
                                    Pricing
                                </NavLink>
                            </div>

                            <div className="space-y-5 font-normal text-sm">

                                <p className="cursor-pointer hover:underline">Deals</p>

                                <div className="flex gap-2">
                                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill-rule="nonzero" d="M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.49 301.51v-2.03c.16-13.46 1.48-24.12 4.07-32.05 2.54-7.92 6.19-14.37 10.97-19.25 4.77-4.92 10.51-9.39 17.22-13.46 4.31-2.74 8.22-5.78 11.68-9.18 3.45-3.36 6.19-7.27 8.23-11.69 2.02-4.37 3.04-9.24 3.04-14.62 0-6.4-1.52-11.94-4.57-16.66-3-4.68-7.06-8.28-12.04-10.87-5.03-2.54-10.61-3.81-16.76-3.81-5.53 0-10.81 1.11-15.89 3.45-5.03 2.29-9.25 5.89-12.55 10.77-3.3 4.87-5.23 11.12-5.74 18.74h-32.91c.51-12.95 3.81-23.92 9.85-32.91 6.1-8.99 14.13-15.8 24.08-20.42 10.01-4.62 21.08-6.9 33.16-6.9 13.31 0 24.89 2.43 34.84 7.41 9.96 4.93 17.73 11.83 23.27 20.67 5.48 8.84 8.28 19.1 8.28 30.88 0 8.08-1.27 15.34-3.81 21.79-2.54 6.45-6.1 12.24-10.77 17.27-4.68 5.08-10.21 9.54-16.71 13.41-6.15 3.86-11.12 7.82-14.88 11.93-3.81 4.11-6.56 8.99-8.28 14.58-1.73 5.63-2.69 12.59-2.84 20.92v2.03h-30.94zm16.36 65.82c-5.94-.04-11.02-2.13-15.29-6.35-4.26-4.21-6.35-9.34-6.35-15.33 0-5.89 2.09-10.97 6.35-15.19 4.27-4.21 9.35-6.35 15.29-6.35 5.84 0 10.92 2.14 15.18 6.35 4.32 4.22 6.45 9.3 6.45 15.19 0 3.96-1.01 7.62-2.99 10.87-1.98 3.3-4.57 5.94-7.82 7.87-3.25 1.93-6.86 2.9-10.82 2.94zM417.71 94.29C376.33 52.92 319.15 27.32 256 27.32c-63.15 0-120.32 25.6-161.71 66.97C52.92 135.68 27.32 192.85 27.32 256c0 63.15 25.6 120.33 66.97 161.71 41.39 41.37 98.56 66.97 161.71 66.97 63.15 0 120.33-25.6 161.71-66.97 41.37-41.38 66.97-98.56 66.97-161.71 0-63.15-25.6-120.32-66.97-161.71z" />
                                    </svg>
                                    <p className="cursor-pointer hover:underline">Help Center</p>
                                </div>

                                <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24" >
                                        <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                                    </svg>
                                    <p className="cursor-pointer hover:underline">Account</p>
                                </div>

                                <div className="flex gap-2">
                                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.9 107.5"><g><path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0.1,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3v0H44.7 c1.4,5.2,2.8,8,4.7,9.3c2.3,1.5,6.3,1.6,13,1.5h0.1v0h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5v0 c-8.3,0.1-13.4-0.1-17.5-2.8c-4.2-2.8-6.4-7.6-8.6-16.3l0,0L23,13.9c0-0.1,0-0.1-0.1-0.2c-0.6-2.2-1.6-3.7-3-4.5 c-1.4-0.9-3.3-1.3-5.5-1.3c-0.1,0-0.2,0-0.3,0H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3L96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6c0,5.3-4.3,9.6-9.6,9.6 c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3L53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7L33.7,23.7z" /></g>
                                    </svg>
                                    <p className="cursor-pointer hover:underline">Basket</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sub Menu */}

                    <SubMenu
                        currentScreen={currentScreen}
                        activeMenu={activeMenu}
                        goBack={goBack}
                    />
                </div>

                {isMenuOpen && (
                    <button onClick={closeMenu} className="absolute top-4 right-10 z-50 text-white text-4xl cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m9.88 12.71-4.95 4.95 1.41 1.41 2.83-2.83L12 13.41l2.12 2.13 3.54 3.53 1.41-1.41-4.95-4.95-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12z"></path>
                        </svg>
                    </button>
                )}
            </div>

        </>
    );
}

export default MobileMenu;