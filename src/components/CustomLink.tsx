import { ReactNode } from "react"

type CustomLinkProps = { href: string; children: ReactNode }

export default function CustomLink({ href, children }: CustomLinkProps) {
   return (
      <a
         href={href}
         target="_blank"
         rel="noopener noreferrer"
         className="text-green-main font-semibold underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200"
      >
         {children}
      </a>
   )
}
