import { ReactNode, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import useWindowSize from "../../hooks/useWindowSize"
import { usePopup } from "../../context/popupContext"

type Element = {
   element: ReactNode
}

export type ListingType = {
   img: string
   title: Element
   subtitle: Element
   info: Element | Element[]
   listMode: boolean
   gridCount?: number
}

export default function Listing({
   img,
   title,
   subtitle,
   info,
   listMode,
   gridCount,
}: ListingType) {
   const mobileWidth = !useWindowSize(450)
   const { openPopup } = usePopup()

   function handleOpenDetails(listMode: boolean) {
      if (listMode) {
         openPopup(
            title.element,
            <div className="flex flex-col">
               {(info as Element).element}
               <button
                  style={{
                     background: isButtonClicked
                        ? "linear-gradient(360deg, #2A6A00 0%, #66A83D 88.12%)"
                        : "linear-gradient(360deg, #3A8100 0%, #76BB3E 88.12%)",
                     boxShadow: isButtonClicked
                        ? "inset 0px 4px 7.2px 0px #2F6A00BF"
                        : "0px 4px 7.2px 0px #2F6A00BF",
                  }}
                  className={`font-extrabold text-white rounded-2xl self-end focus:bg-white px-2 py-1 text-sm mt-2`}
                  onMouseDown={handleButtonAnimation}
                  onMouseUp={() => setIsButtonClicked(false)}
                  onMouseLeave={() => setIsButtonClicked(false)}
                  onClick={handleButtonClick}
               >
                  Where to buy
               </button>
            </div>
         )
      } else {
         openPopup(
            title.element,
            <div>
               {(info as Element).element}
               <div className="flex flex-col">
                  {subtitle.element}
                  <button
                     style={{
                        background: isButtonClicked
                           ? "linear-gradient(360deg, #2A6A00 0%, #66A83D 88.12%)"
                           : "linear-gradient(360deg, #3A8100 0%, #76BB3E 88.12%)",
                        boxShadow: isButtonClicked
                           ? "inset 0px 4px 7.2px 0px #2F6A00BF"
                           : "0px 4px 7.2px 0px #2F6A00BF",
                     }}
                     className={`font-extrabold text-white rounded-2xl self-end focus:bg-white px-2 py-1 text-sm mt-2`}
                     onMouseDown={handleButtonAnimation}
                     onMouseUp={() => setIsButtonClicked(false)}
                     onMouseLeave={() => setIsButtonClicked(false)}
                     onClick={handleButtonClick}
                  >
                     Where to buy
                  </button>
               </div>
            </div>
         )
      }
   }

   const [isButtonClicked, setIsButtonClicked] = useState(false)

   const handleButtonAnimation = () => {
      setIsButtonClicked(true)
   }

   const handleButtonClick = () => {
      window.open("https://www.eco-gecko.com/where-to-buy", "_blank")
   }

   const renderInfo = () => {
      if (Array.isArray(info)) {
         return info.map((item) => (
            <li key={uuidv4()} className="list-disc text-xs">
               {item.element}
            </li>
         ))
      } else {
         return (
            <li key={uuidv4()} className="text-xs">
               {info.element}
            </li>
         )
      }
   }

   return (
      <div
         className={`flex flex-col h-full justify-between ${
            gridCount && gridCount < 2 ? "items-center" : "items-start"
         } gap-y-1 relative`}
      >
         <div>
            <img
               src={img}
               alt={img}
               style={{
                  maxWidth: mobileWidth ? "100px" : "100%",
                  maxHeight: mobileWidth ? "100px" : "200px",
                  minWidth: mobileWidth ? "100px" : "200px",
                  minHeight: mobileWidth ? "100px" : "200px",
                  objectFit: "contain",
               }}
            />
            <span
               className={`${
                  mobileWidth ? "text-sm" : "text-2xl"
               } font-extrabold text-green-main`}
            >
               {title.element}
            </span>
            <span className="text-xs">
               {mobileWidth && (
                  <p>
                     Available in{" "}
                     {Array.isArray(info)
                        ? `${(info as Element[])
                             .map((item) =>
                                Array.isArray(item.element)
                                   ? item.element.length
                                   : 1
                             )
                             .reduce((a, b) => a + b, 0)} sizes`
                        : Array.isArray(info.element)
                        ? `${(info.element as ReactNode[]).length} sizes`
                        : "1 size"}
                  </p>
               )}
               {!mobileWidth && subtitle.element}
            </span>

            {mobileWidth ? (
               <p
                  className="text-green-main underline text-xs font-bold cursor-pointer"
                  onClick={() => handleOpenDetails(listMode)}
               >
                  Details and order
               </p>
            ) : listMode ? (
               <div>
                  <ul className="flex flex-col gap-y-2 list-inside ml-1">
                     {renderInfo()}
                  </ul>
               </div>
            ) : (
               <span className="text-xs">
                  {Array.isArray(info) ? info[0].element : info.element}
               </span>
            )}
         </div>

         {!mobileWidth && (
            <button
               style={{
                  background: isButtonClicked
                     ? "linear-gradient(360deg, #2A6A00 0%, #66A83D 88.12%)"
                     : "linear-gradient(360deg, #3A8100 0%, #76BB3E 88.12%)",
                  boxShadow: isButtonClicked
                     ? "inset 0px 4px 7.2px 0px #2F6A00BF"
                     : "0px 4px 7.2px 0px #2F6A00BF",
               }}
               className={`font-extrabold text-white rounded-2xl focus:bg-white ${
                  mobileWidth
                     ? "px-2 py-1 text-sm mt-2"
                     : "px-3 py-2 ml-36 mt-4"
               }`}
               onMouseDown={handleButtonAnimation}
               onMouseUp={() => setIsButtonClicked(false)}
               onMouseLeave={() => setIsButtonClicked(false)}
               onClick={handleButtonClick}
            >
               Where to buy
            </button>
         )}
      </div>
   )
}
