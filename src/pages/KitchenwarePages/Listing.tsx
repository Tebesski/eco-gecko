import { ReactNode, useState } from "react"
import { v4 as uuidv4 } from "uuid"

type element = {
   element: ReactNode
}

export type ListingType = {
   img: string
   title: element
   subtitle: element
   info: element | element[]
   listMode: boolean
}

export default function Listing({
   img,
   title,
   subtitle,
   info,
   listMode,
}: ListingType) {
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
      <div className="flex flex-col items-start gap-y-2 relative">
         <img
            src={img}
            alt={img}
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
         />
         <span className="text-xl font-extrabold text-green-main">
            {title.element}
         </span>
         <span className="text-xs">{subtitle.element}</span>

         {listMode ? (
            <ul className="flex flex-col gap-y-2 list-inside ml-1">
               {renderInfo()}
            </ul>
         ) : (
            <span className="text-xs">
               {Array.isArray(info) ? info[0].element : info.element}
            </span>
         )}

         <button
            style={{
               background: isButtonClicked
                  ? "linear-gradient(360deg, #2A6A00 0%, #66A83D 88.12%)"
                  : "linear-gradient(360deg, #3A8100 0%, #76BB3E 88.12%)",
               boxShadow: isButtonClicked
                  ? "inset 0px 4px 7.2px 0px #2F6A00BF"
                  : "0px 4px 7.2px 0px #2F6A00BF",
            }}
            className="font-extrabold text-white rounded-2xl self-end px-3 py-2 focus:bg-white absolute bottom-[-50px] right-20"
            onMouseDown={handleButtonAnimation}
            onMouseUp={() => setIsButtonClicked(false)}
            onMouseLeave={() => setIsButtonClicked(false)}
            onClick={handleButtonClick}
         >
            Buy now
         </button>
      </div>
   )
}
