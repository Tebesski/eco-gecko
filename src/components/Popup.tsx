import { useEffect } from "react"
import { usePopup } from "../context/popupContext"

interface PopupProps {
   title: string
   content: React.ReactNode
   open: boolean
   handleOpen: () => void
   handleClose: () => void
}

export const Popup: React.FC<PopupProps> = ({
   title,
   content,
   open,
   handleOpen,
   handleClose,
}) => {
   const { openPopup, closePopup } = usePopup()

   useEffect(() => {
      if (open) {
         openPopup(title, content)
         handleOpen()
      } else {
         closePopup()
         handleClose()
      }
   }, [open, title, content, openPopup, closePopup, handleOpen, handleClose])

   return null
}
