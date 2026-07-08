type Props = {
    name: string;
    activeMenu: string | null;
    clickMenu: (name: string) => void;
}

function MenuButton({ name, activeMenu, clickMenu }: Props) {
    const isActive = activeMenu === name;
    return (
        <div onClick={()=>{clickMenu(name)}}
        className={`flex items-center cursor-pointer p-2 rounded-lg
            ${isActive? "bg-white text-black" : ""}`}
        >
            <p>{name}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className={`
                    transition-transform duration-100
                    ${isActive ? "rotate-180" : ""}
                `}
            >
                <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z" />
            </svg>
        </div>
    )
}

export default MenuButton