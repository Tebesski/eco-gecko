import { ReactNode } from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function Title({
   children,
   addStyles,
   centered = true,
}: {
   children: ReactNode
   addStyles?: string
   centered?: boolean
}) {
   const mobileWidth = !useWindowSize(410)

   function Mobile() {
      return (
         <h1
            className={`font-extrabold text-green-main ${
               centered ? "text-center" : ""
            } text-xl ${addStyles}`}
         >
            {children}
         </h1>
      )
   }

   return mobileWidth ? (
      <Mobile />
   ) : (
      <h1
         className={`font-extrabold text-green-main ${
            centered ? "text-center" : ""
         } text-3xl ${addStyles}`}
      >
         {children}
      </h1>
   )
}
