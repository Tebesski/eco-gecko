import useWindowSize from "../../hooks/useWindowSize"
import FooterMenu from "./FooterMenu"

export default function Footer() {
   const currentYear = new Date().getFullYear()
   const mobileWidth = !useWindowSize(450)

   function Mobile() {
      return (
         <div className="bg-graphite w-full gap-y-2 flex flex-col text-off-white text-opacity-70 h-20 text-xxs items-center justify-center mt-8">
            <div className="flex flex-col items-center justify-center text-center px-1">
               <p>Biodegradable Compostable Cutlery Plates Bowls</p>
               <p>
                  Copyright © 2008-{currentYear} Disposable Natural Tableware by
                  Eco-Gecko Creation LLC
               </p>
               <p>All rights reserved.</p>
            </div>

            {!mobileWidth && <FooterMenu />}
         </div>
      )
   }

   return mobileWidth ? (
      <Mobile />
   ) : (
      <div className="bg-graphite w-full gap-y-2 flex flex-col text-off-white text-opacity-70 h-24 text-xs items-center justify-center mt-20">
         <div className="flex flex-col items-center justify-center">
            <p>Biodegradable Compostable Cutlery Plates Bowls</p>
            <p>
               Copyright © 2008-{currentYear} Disposable Natural Tableware by
               Eco-Gecko Creation LLC
            </p>
            <p>All rights reserved.</p>
         </div>

         <FooterMenu />
      </div>
   )
}
