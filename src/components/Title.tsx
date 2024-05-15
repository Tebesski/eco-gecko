import { ReactNode } from "react"

export default function Title({
   children,
   addStyles,
   centered = true,
}: {
   children: ReactNode
   addStyles?: string
   centered?: boolean
}) {
   return (
      <h1
         className={`font-extrabold text-green-main ${
            centered ? "text-center" : ""
         } text-3xl ${addStyles}`}
      >
         {children}
      </h1>
   )
}
