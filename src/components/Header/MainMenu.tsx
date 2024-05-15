import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

const navLinks = [
   { to: "/home", text: "Home" },
   { to: "/about", text: "Who We Are" },
   { to: "/customization", text: "Customization" },
   { to: "/compost", text: "How To Compost" },
   { to: "/faq", text: "FAQ" },
   { to: "/where-to-buy", text: "Where To Buy" },
   { to: "/contact-us", text: "Contact Us" },
]

export default function MainMenu() {
   return (
      <nav className="z-20 w-full items-center justify-between flex font-semibold text-lg gap-x-6 sticky top-0 bg-white rounded-b-xl">
         {navLinks.map(({ to, text }) => (
            <NavLink
               key={uuidv4()}
               to={to}
               className={`pb-3 px-3 pt-5 rounded-b-xl hover:bg-green-main hover:text-off-white flex justify-center transition duration-75`}
            >
               {text}
            </NavLink>
         ))}
      </nav>
   )
}
