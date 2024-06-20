import { Link } from "react-router-dom";
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
        Page: "Projects",
        Link: "/projects",
    },
    {
        Page: "Contact",
        Link: "/contact",
    }, {
        Page : "Blogs",
        Link : "/blogs"
    }
];

export default function Footer() {
  return (
    <div className="lg:max-w-6xl mx-auto lg:mb-2 mb-20 border-t-2 p-2 mt-2 flex lg:justify-between justify-center lg:flex-row flex-col">
        <div className="space-x-4 text-center">
            {
                routes.map((route : {Page : string; Link : string;}) => (
                    <Link to={route.Link} className="text-[#737373]" key={route.Link}>{route.Page}</Link>
                ))
            }
        </div>
        <div>
            <p className="text-[#737373] text-center">© 2024 khalidzarar.com. All Rights Reserved.</p>
        </div>
    </div>
  )
}
