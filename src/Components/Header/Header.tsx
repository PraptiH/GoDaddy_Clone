import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from '../../assets/GoDaddy-White-Logo.png'
import mobileLogo from '../../assets/GoDaddy-White-Icon.png'
import MegaMenu from "../MegaMenu/MegaMenu"
import MenuButton from "./MenuButton"
import MobileMenu from "./MobileMenu/MobileMenu"

function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const handleMenuClick = (menuName: string) => {
        setActiveMenu(
            activeMenu === menuName ? null : menuName
        )
    }

    const handleHamburger = () => {
        setIsMenuOpen(prev => !prev)
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = activeMenu ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [activeMenu]);

    return (
        <>
            <div className="z-50">
                <div className="bg-[#0c0c0cde] text-white flex items-center justify-between gap-5 py-3 px-5 lg:px-15">

                    <div className="flex items-center gap-2 lg:gap-5">

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24"
                            className="block lg:hidden md:hidden cursor-pointer"
                            onClick={handleHamburger}>
                            <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                        </svg>

                        <div className="flex items-center gap-3">
                            <img className="hidden md:block lg:block w-35" src={logo} alt="" />
                            <img className="block md:hidden lg:hidden w-8" src={mobileLogo} alt="" />
                        </div>

                        <div className="hidden lg:flex items-center font-medium text-base">

                            <div>
                                <MenuButton
                                    name="Domains"
                                    activeMenu={activeMenu}
                                    clickMenu={handleMenuClick}
                                />
                            </div>

                            <div>
                                <MenuButton
                                    name="Websites"
                                    activeMenu={activeMenu}
                                    clickMenu={handleMenuClick}
                                />
                            </div>

                            <div className="hover:bg-[#454545b4] p-2 rounded-lg text-[15px]">
                                <NavLink to='/email'>Email</NavLink>
                            </div>

                            <div>
                                <MenuButton
                                    name="Hosting"
                                    activeMenu={activeMenu}
                                    clickMenu={handleMenuClick}
                                />
                            </div>

                            <div>
                                <MenuButton
                                    name="Marketing"
                                    activeMenu={activeMenu}
                                    clickMenu={handleMenuClick}
                                />
                            </div>

                            <div>
                                <MenuButton
                                    name="Security"
                                    activeMenu={activeMenu}
                                    clickMenu={handleMenuClick}
                                />
                            </div>

                            <div className="hover:bg-[#454545b4] p-2 rounded-lg text-[15px] text-nowrap">
                                <NavLink to='/aiBuilder'>Ario AI Builder</NavLink>
                            </div>

                            <div className="hover:bg-[#454545b4] p-2 rounded-lg text-[15px]">
                                <NavLink to='/pricing'>Pricing</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex md:flex items-center gap-3 font-sans text-[15px]">
                        <NavLink className="hover:bg-[#454545b4] p-2 rounded-xl" to="/deals">Deals</NavLink>
                        <NavLink className="hover:bg-[#454545b4] p-2 rounded-xl text-nowrap" to="/contact">Contact Us</NavLink>
                        <NavLink className="hover:bg-[#454545b4] p-2 rounded-xl" to="/help">Help</NavLink>
                        <NavLink className="hover:bg-[#454545b4] p-1 rounded-xl text-nowrap flex items-center" to="/signIn">Sign In

                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="36"
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                            </svg>
                        </NavLink>
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
                        </svg>
                    </div>

                    <div className="flex items-center gap-3 lg:hidden md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24"
                            transform="scale(-1,1) ">
                            <path d="M13.71 3.29A1 1 0 0 0 13 3H4c-.55 0-1 .45-1 1v9c0 .27.11.52.29.71l8 8c.2.2.45.29.71.29s.51-.1.71-.29l9-9a.996.996 0 0 0 0-1.41zM12 19.58l-7-7V4.99h7.59l7 7z"></path><path d="M9 7c-1.11 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path><path d="M11 16h2v2h-2zm2.27-9.75c-2.08-.75-4.47.35-5.21 2.41l1.88.68c.18-.5.56-.9 1.07-1.13s1.08-.26 1.58-.08a2.01 2.01 0 0 1 1.32 1.86c0 1.04-1.66 1.86-2.24 2.07-.4.14-.67.52-.67.94v1h2v-.34c1.04-.51 2.91-1.69 2.91-3.68a4.015 4.015 0 0 0-2.64-3.73"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5"></path>
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
                        </svg>
                    </div>

                </div>

                {activeMenu && (
                    <div
                        className="fixed top-18 bottom-0 left-0 right-0 z-40 backdrop-blur-[2px] transition-all duration-300"
                        onClick={() => setActiveMenu(null)}
                    />
                )}

                <MegaMenu activeMenu={activeMenu} />
                <MobileMenu
                    isMenuOpen={isMenuOpen}
                    closeMenu={closeMenu}
                />
            </div>
        </>
    )
}

export default Header