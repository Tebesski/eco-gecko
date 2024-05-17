import { createContext, useState, useContext, ReactNode } from "react"
import { Dialog, DialogTitle, DialogContent } from "@mui/material"

type PopupContextType = {
   isOpen: boolean
   title: string
   content: ReactNode
   openPopup: (title: string, content: ReactNode) => void
   closePopup: () => void
}

const PopupContext = createContext<PopupContextType | undefined>(undefined)

export default function PopupProvider({ children }: { children: ReactNode }) {
   const [isOpen, setIsOpen] = useState(false)
   const [title, setTitle] = useState("")
   const [content, setContent] = useState<ReactNode>(null)

   const openPopup = (title: string, content: ReactNode) => {
      setTitle(title)
      setContent(content)
      setIsOpen(true)
   }

   const closePopup = () => {
      setIsOpen(false)
   }

   return (
      <PopupContext.Provider
         value={{
            isOpen,
            title,
            content,
            openPopup,
            closePopup,
         }}
      >
         {children}
         <Dialog open={isOpen} onClose={closePopup}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{content}</DialogContent>
         </Dialog>
      </PopupContext.Provider>
   )
}

export const usePopup = () => {
   const context = useContext(PopupContext)
   if (context === undefined) {
      throw new Error("usePopup must be used within a PopupProvider")
   }
   return context
}
