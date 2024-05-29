import { useEffect, useState } from "react"
import image1 from "../../../assets/slider/1.jpg"
import image2 from "../../../assets/slider/2.jpg"
import image3 from "../../../assets/slider/3.jpg"
import image4 from "../../../assets/slider/4.jpg"
import image5 from "../../../assets/slider/5.jpg"
import image6 from "../../../assets/slider/6.jpg"
import image7 from "../../../assets/slider/7.jpg"
import fsc from "../../../assets/fsc.png"
import { v4 as uuidv4 } from "uuid"
import useWindowSize from "../../hooks/useWindowSize"

export default function Slider() {
   const mobileWidth = !useWindowSize(450)
   const images = [image1, image2, image3, image4, image5, image6, image7]
   const [currentImg, setCurrentImg] = useState(0)
   const [isHovering, setIsHovering] = useState(false)
   const [currentText, setCurrentText] = useState(true)

   useEffect(() => {
      const interval = setInterval(() => {
         setCurrentText((currentText) => !currentText)
      }, 3000)

      return () => clearInterval(interval)
   }, [currentText, setCurrentText])

   useEffect(() => {
      if (!isHovering) {
         currentImg > images.length - 1 && setCurrentImg(0)

         const interval = setInterval(() => {
            setCurrentImg((currentImg) => currentImg + 1)
         }, 4000)

         return () => clearInterval(interval)
      }
   }, [currentImg, isHovering])

   function Mobile() {
      return (
         <div className="flex flex-col w-full h-full">
            <figure className="relative w-full h-[104px] overflow-hidden">
               <div className="pb-1"></div>
               {images.map((img, index) => (
                  <img
                     key={index}
                     src={img}
                     alt="Slider"
                     className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ${
                        currentImg === index ? "opacity-100" : "opacity-0"
                     }`}
                  />
               ))}
            </figure>
            <div className="bg-gray px-2 py-2 text-off-white text-xxs gap-y-2 flex flex-col">
               <div className="flex gap-x-1 items-center justify-between">
                  {currentText ? (
                     <span className="flex-grow">
                        <b>
                           Compostable palm leaf plates and bowls by Eco-Gecko
                        </b>{" "}
                        are made from fallen palm leaves. Free of toxins and
                        chemicals, our disposable palm leaf tableware is
                        naturally beautiful and functional.
                     </span>
                  ) : (
                     <span className="flex-grow">
                        <b>
                           Biodegradable and compostable wooden cutlery by
                           Eco-Gecko
                        </b>{" "}
                        is made from FSC®- certified birch wood. Our disposable
                        cutlery, and tableware are harvested and crafted
                        sustainably.{" "}
                     </span>
                  )}

                  <img src={fsc} alt="FSC" width={50} height={50} />
               </div>
            </div>
         </div>
      )
   }

   return mobileWidth ? (
      <Mobile />
   ) : (
      <div className="flex justify-center gap-x-3 w-full">
         <figure className="flex-grow relative flex z-10">
            <div className="pb-1"></div>
            {images.map((img, index) => (
               <img
                  key={index}
                  src={img}
                  alt="Slider"
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                     currentImg === index ? "opacity-100" : "opacity-0"
                  }`}
               />
            ))}
            <div className="absolute bottom-0 left-0 w-full h-[10px] flex">
               {images.map((_, index) => (
                  <div
                     key={uuidv4()}
                     className={`flex-grow h-full bg-gray opacity-50 cursor-pointer ${
                        currentImg === index
                           ? "bg-gray-dark"
                           : "hover:bg-gray-dark"
                     }`}
                     onMouseEnter={() => {
                        setCurrentImg(index)
                        setIsHovering(true)
                     }}
                     onMouseLeave={() => setIsHovering(false)}
                  />
               ))}
            </div>
         </figure>

         <div className="bg-gray w-64 h-[275px] px-4 py-4 text-off-white text-xs gap-y-2 flex flex-col">
            <div className="flex gap-x-2 items-start">
               <span className="flex-grow">
                  <span className="font-bold">
                     Biodegradable and compostable wooden cutlery by Eco-Gecko
                  </span>{" "}
                  is made from FSC®- certified birch wood. Our disposable
                  cutlery, and tableware are harvested and crafted sustainably.{" "}
               </span>

               <img src={fsc} alt="FSC" width={80} height={80} />
            </div>

            <span className="flex-grow">
               <span className="font-bold">
                  Compostable palm leaf plates and bowls by Eco-Gecko
               </span>{" "}
               are made from fallen palm leaves. Free of toxins and chemicals,
               our disposable palm leaf tableware is naturally beautiful and
               functional.
            </span>
         </div>
      </div>
   )
}
