type Props = {
    name: string;
    activeMenu: string | null;
    clickMenu: (name: string) => void;
}

function MenuButton({ name, activeMenu, clickMenu }: Props) {
    const isActive = activeMenu === name;
    return (
        <div onClick={() => { clickMenu(name) }}
            className={`group flex items-center justify-between cursor-pointer p-0 lg:p-2 rounded-lg 
            text-[18px] lg:text-[15px] lg:hover:bg-[#454545b4]
            ${isActive ? "bg-white text-black lg:hover:bg-white" : ""}`}
        >
            <p className="group-hover:bg-gray-100 lg:group-hover:bg-transparent rounded-sm lg:rounded-lg md:rounded-lg">{name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                className={`hidden lg:block w-5
                    transition-transform duration-100
                    ${isActive ? "rotate-180" : ""}
                `}
            >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z" />
            </svg>

            <svg className="block lg:hidden w-5 group-hover:bg-none group-hover:translate-x-2 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 243.58">
                <path fill-rule="nonzero" d="M373.57 0 512 120.75 371.53 243.58l-20.92-23.91 94.93-83L0 137.09v-31.75l445.55-.41-92.89-81.02z" />
            </svg>
        </div>
    )
}

export default MenuButton