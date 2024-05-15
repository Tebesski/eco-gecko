import logo from "../../../assets/logo.png"
import gecko from "../../../assets/gecko.png"

export default function HeaderLogo() {
   return (
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
