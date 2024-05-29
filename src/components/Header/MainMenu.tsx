import { NavLink } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import useWindowSize from "../../hooks/useWindowSize"
import {
   Drawer,
   List,
   IconButton,
   ListItemText,
   ListItemButton,
   Divider,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"

export default function MainMenu() {
   const [mobileOpen, setMobileOpen] = useState(false)
   const mobileWidth = !useWindowSize(450)

   const kitchenwareLinks = [
      { to: "kitchenware/plates", text: "Palm plates" },
      { to: "kitchenware/bowls", text: "Palm bowls" },
      { to: "kitchenware/forks", text: "Wooden forks" },
      { to: "kitchenware/spoons", text: "Wooden spoons" },
      { to: "kitchenware/knives", text: "Wooden knives" },
   ]

   const navLinks = [
      { to: "/home", text: "Home" },
      { to: "/about", text: `${mobileWidth ? "Who we are" : "Who We Are"}` },
      { to: "/customization", text: "Customization" },
      {
         to: "/compost",
         text: `${mobileWidth ? "How to compost" : "How To Compost"}`,
      },
      { to: "/faq", text: "FAQ" },
      {
         to: "/where-to-buy",
         text: `${mobileWidth ? "Where to buy" : "Where To Buy"}`,
      },
      {
         to: "/contact-us",
         text: `${mobileWidth ? "Contact us" : "Contact Us"}`,
      },
   ]

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
   }

   const drawer = (
      <Drawer anchor={"right"} open={mobileOpen} onClose={handleDrawerToggle}>
         <List>
            {navLinks.map(({ to, text }) => (
               <ListItemButton
                  sx={{ width: "100%", textAlign: "right" }}
                  key={uuidv4()}
                  component={NavLink}
                  to={to}
                  onClick={handleDrawerToggle}
               >
                  <ListItemText primary={text} />
               </ListItemButton>
            ))}
            <Divider
               sx={{ bgcolor: "green", width: "66%", marginLeft: "18%" }}
            />
            {kitchenwareLinks.map(({ to, text }) => (
               <ListItemButton
                  sx={{
                     width: "100%",
                     textAlign: "right",
                     color: "#76BB3E",
                  }}
                  key={uuidv4()}
                  component={NavLink}
                  to={to}
                  onClick={handleDrawerToggle}
               >
                  <ListItemText primary={text} sx={{ fontSize: 10 }} />
               </ListItemButton>
            ))}
         </List>
      </Drawer>
   )

   return (
      <>
         {mobileWidth ? (
            <nav className="fixed top-[-8px] right-[-8px] z-50">
               <IconButton onClick={handleDrawerToggle} className="bg-white">
                  <MenuIcon
                     sx={{
                        fontSize: 40,
                        color: "green",
                        backgroundColor: "white",
                     }}
                  />
               </IconButton>
               {drawer}
            </nav>
         ) : (
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
         )}
      </>
   )
}
