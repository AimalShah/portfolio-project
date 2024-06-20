import { NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
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
      Page: "Blogs",
      Link: "/blogs",
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
    <div className="max-w-md h-fit left-1/2 transform -translate-x-1/2 mx-auto fixed lg:bottom-100 lg:top-4 bottom-5 z-30 lg:p-0 px-4">
      <div className="max-w-md mx-auto flex gap-4 lg:justify-between justify-center items-center rounded-xl lg:p-3 py-2 px-2 dark:bg-[#171717] bg-primary-foreground darK:border-[#737373] border ">
        <div className="hidden lg:block">
          <img
            src={"https://reactfolio.tharindu.dev/logo.png"}
            alt=""
            className="w-8"
          />
        </div>

        <div className="flex lg:gap-4 gap-2">
          <NavLink
            to={routes[0].Link}
            className={({ isActive }) =>
              isActive ? "dark:text-white text-sm" : "text-sm text-[#737373]"
            }
          >
            {routes[0].Page}
          </NavLink>
          <NavLink
            to={routes[1].Link}
            className={({ isActive }) =>
              isActive ? "dark:text-white text-sm" : "text-sm text-[#737373]"
            }
          >
            {routes[1].Page}
          </NavLink>
          <NavLink
            to={routes[2].Link}
            className={({ isActive }) =>
              isActive ? "dark:text-white text-sm" : "text-sm text-[#737373]"
            }
          >
            {routes[2].Page}
          </NavLink>
          <NavLink
            to={routes[3].Link}
            className={({ isActive }) =>
              isActive ? "dark:text-white text-sm" : "text-sm text-[#737373]"
            }
          >
            {routes[3].Page}
          </NavLink>
          <NavLink
            to={routes[4].Link}
            className={({ isActive }) =>
              isActive ? "dark:text-white text-sm" : "text-sm text-[#737373]"
            }
          >
            {routes[4].Page}
          </NavLink>
        </div>

        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
