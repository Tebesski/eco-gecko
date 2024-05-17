import useWindowSize from "../../hooks/useWindowSize"
import React from "react"
import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

const navLinks = [
   { to: "kitchenware/plates", text: "Palm Leaf Plates" },
   { to: "kitchenware/bowls", text: "Palm Leaf Bowls" },
   { to: "kitchenware/forks", text: "Wooden Forks" },
   { to: "kitchenware/spoons", text: "Wooden Spoons" },
   { to: "kitchenware/knives", text: "Wooden Knives" },
]

export default function KitchenwareMenu() {
   const mobileWidth = useWindowSize(410)

   return (
      mobileWidth && (
         <nav className="flex font-semibold text-xs gap-x-2 justify-between items-center text-green-main w-3/4 ml-[-8px]">
            {navLinks.map(({ to, text }, index) => (
               <React.Fragment key={uuidv4()}>
                  {index !== 0 && (
                     <div className="h-4 border-l-green-main border-l-2"></div>
                  )}
                  <NavLink
                     key={uuidv4()}
                     to={to}
                     className={`py-1 px-3 rounded-lg hover:bg-green-main hover:text-off-white flex justify-center`}
                     style={{ textShadow: "0px 0px 1px rgba(0, 0, 0, 0.2)" }}
                  >
                     {text}
                  </NavLink>
               </React.Fragment>
            ))}
         </nav>
      )
   )
}
