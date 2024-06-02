import logo from "../../../assets/logo.png"
import gecko from "../../../assets/gecko.png"
import useWindowSize from "../../hooks/useWindowSize"

export default function HeaderLogo() {
   const mobileWidth = !useWindowSize(450)

   function Mobile() {
      return (
         <div className="flex text-green-main justify-between mt-4">
            <div className="flex gap-x-1 items-center flex-1">
               <img src={logo} alt="logo" width={60} height={60} />

               <span className="flex flex-col">
                  <h1 className="font-semibold text-sm leading-3">
                     ECO-GECKO CREATION LLC
                  </h1>
                  <h3 className="font-normal text-xs">est.2008</h3>
               </span>
            </div>

            {mobileWidth ? null : (
               <img
                  src={gecko}
                  alt="gecko"
                  className="object-contain block rotate-12"
                  width={309 / 3.5}
                  height={241 / 3.5}
               />
            )}
         </div>
      )
   }

   return mobileWidth ? (
      <Mobile />
   ) : (
      <div className="flex text-green-main justify-between px-6 mt-4">
         <div className="flex gap-x-4 items-center flex-1">
            <img src={logo} alt="logo" width={80} height={80} />

            <span className="flex flex-col gap-y-1">
               <h1 className="font-semibold text-xl">ECO-GECKO CREATION LLC</h1>
               <h3 className="font-normal text-xl">est.2008</h3>
            </span>
         </div>

         <img
            src={gecko}
            alt="gecko"
            className="object-contain block"
            width={309 / 2.5}
            height={241 / 2.5}
         />
      </div>
   )
}
