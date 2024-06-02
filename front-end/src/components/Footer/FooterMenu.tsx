import React from "react"
import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

const navLinks = [
   { to: "home", text: "Home" },
   { to: "about", text: "Who We Are" },
   { to: "customization", text: "Customization" },
   { to: "compost", text: "How To Compost" },
   { to: "faq", text: "FAQ" },
   { to: "where-to-buy", text: "Where To Buy" },
   { to: "contact-us", text: "Contact Us" },
]

export default function FooterMenu() {
   return (
      <nav className="flex font-semibold text-xs gap-x-2 justify-center items-center text-green-main text-opacity-70">
         {navLinks.map(({ to, text }, index) => (
            <React.Fragment key={uuidv4()}>
               {index !== 0 && (
                  <div className="h-[11px] border-l-gray border-l-2"></div>
               )}
               <NavLink
                  to={to}
                  className="transition-colors duration-75 hover:text-off-white"
                  style={{ textShadow: "0px 0px 1px rgba(0, 0, 0, 0.2)" }}
               >
                  {text}
               </NavLink>
            </React.Fragment>
         ))}
      </nav>
   )
}
