import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { useState } from "react"
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

    return (
        <>
            <div>
                <div className="bg-black text-white flex items-center justify-around gap-5 py-5 px-8">

                    <div className="flex items-center gap-5">

                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24"
                            className="min-[600px]:block lg:hidden md:hidden cursor-pointer"
                            onClick={handleHamburger}>
                            <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                        </svg>

                        <div className="flex items-center gap-3">
                            <img className="w-15" src={logo} alt="" />
                            <h2 className="font-bold text-2xl relative">DomainBD <sub className="font-normal text-sm left-12 top-6 absolute">Bangladesh</sub></h2>
                        </div>

                        <div className="hidden lg:flex items-center gap-4 font-medium text-base">

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

                            <div>
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

                            <div>
                                <NavLink to='/aiBuilder'>Ario AI Builder</NavLink>
                            </div>

                            <div>
                                <NavLink to='/pricing'>Pricing</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="hidden min-[600px]:flex items-center gap-3 text-base">
                        <NavLink to="/deals">Deals</NavLink>
                        <NavLink to="/contact">Contact Us</NavLink>
                        <NavLink to="/help">Help</NavLink>
                        <NavLink to="/signIn">Sign In</NavLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
                        </svg>
                    </div>
                </div>

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