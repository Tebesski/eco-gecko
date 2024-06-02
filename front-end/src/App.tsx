import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header/Header"
import MainMenu from "./components/Header/MainMenu"
import Footer from "./components/Footer/Footer"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import PopupProvider from "./context/popupContext"

function App() {
   const navigate = useNavigate()
   const location = useLocation()

   useEffect(() => {
      if (location.pathname === "/") {
         navigate("/home")
      }
   }, [navigate, location])

   return (
      <PopupProvider>
         <main className="flex w-full items-center justify-center flex-col">
            <div className="w-3/4">
               <MainMenu />
               <Header />
               <div className="mt-4">
                  <Outlet />
               </div>
            </div>
            <Footer />
         </main>
      </PopupProvider>
   )
}

export default App
