import { NavLink } from "react-router-dom";
import LOGO from "../../public/vite.svg"
export default function Navbar() {
    const routes = [
        {
            Page: "Home",
            Link: "/",
        },
        {
            Page: "About",
            Link: "/about",
        },
        {
            Page: "Services",
            Link: "/services",
        },
        {
            Page: "Projects",
            Link: "/projects",
        },
        {
            Page: "Contact",
            Link: "/contact",
        },
    ];

    return (
        <div className="max-w-md right-[35%] mx-auto fixed lg:bottom-100 lg:top-4 bottom-5 z-30">
            <div className="max-w-md mx-auto flex gap-4 lg:justify-between  justify-center items-center rounded-xl lg:p-3 p-4 bg-[#171717] border-[#737373] border">
               <div className="hidden lg:block">
                <img src={LOGO} alt="" className="w-6"/>
               </div>

                 <div className="flex gap-4">
                 <NavLink to={routes[0].Link} className={({isActive}) => isActive ? "text-white text-sm" : "text-sm text-[#737373]"}>
                            {routes[0].Page}
                </NavLink>
                <NavLink to={routes[1].Link} className={({isActive}) => isActive ? "text-white text-sm" : "text-sm text-[#737373]"}>
                            {routes[1].Page}
                </NavLink>
                <NavLink to={routes[2].Link} className={({isActive}) => isActive ? "text-white text-sm" : "text-sm text-[#737373]"}>
                            {routes[2].Page}
                </NavLink>
                <NavLink to={routes[3].Link} className={({isActive}) => isActive ? "text-white text-sm" : "text-sm text-[#737373]"}>
                            {routes[3].Page}
                </NavLink>
                <NavLink to={routes[4].Link} className={({isActive}) => isActive ? "text-white text-sm" : "text-sm text-[#737373]"}>
                            {routes[4].Page}
                </NavLink>
                </div>       
                  
            </div>
        </div>
    )
}
