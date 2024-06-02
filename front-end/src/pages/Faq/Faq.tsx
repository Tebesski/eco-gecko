import FSC from "../../components/FSC"
import { QA } from "../../components/QA"
import { v4 as uuidv4 } from "uuid"
import useWindowSize from "../../hooks/useWindowSize"
import { usePopup } from "../../context/popupContext"
import { ReactNode } from "react"

export default function Faq() {
   const mobileWidth = !useWindowSize(450)
   const { openPopup } = usePopup()

   const handleClick = (title: string, content: ReactNode) => {
      openPopup(title, content)
   }

   const qa = [
      {
         q: "Why would you make disposable cutlery out of wood ?",
         a: "Basically speaking, the oil used to make most plastic cutlery is a non-renewable resource that takes thousands of years to decompose. Plastic waste often ends up in landfills, polluting our oceans, and sometimes even ends up killing animals that mistake it for food. Wood is a much better alternative since it is a renewable resource. It is natural and it is biodegradable. And it works.",
      },
      {
         q: "What kind of wood is the cutlery made out of?",
         a: "It's made from birch. Birch is a hardwood that is attractive and doesn't split or splinter very easily.",
      },
      {
         q: "Are there any coatings or chemicals on the cutlery?",
         a: "No. Just birch wood. Nothing else. We do not want to slow down the decomposing process by adding a coating, nor do we want to introduce foreign chemicals to the soil, oceans, lakes, streams, etc.",
      },
      {
         q: "Can I use the cutlery more than once?",
         a: "Well, maybe. You may in some cases find opportunities to use the cutlery more than once, but our cutlery is intended to be used only once.",
      },
      {
         q: "Don't you have to cut down trees to make the cutlery?",
         a: "Yes, but the wood is only taken from plantation forests that are harvested sustainably. The birch trees taken from these forests were planted for the purpose of harvesting and are being harvested for at least a second time. This means that only as much wood is allowed to be taken from the area as can grow back in the same time. The trees are re-planted immediately with the purpose of harvesting them again.",
      },
      {
         q: "How long does it take to decompose?",
         a: "The amount of time depends largely on where and how it is disposed of. If conditions are ideal, the cutlery could completely decompose in about 80 days. In drier conditions it could take much longer. Tests are currently being conducted and we will post the results when they are completed.",
      },
      {
         q: "Can I put the cutlery in my compost?",
         a: "Absolutely. In fact, we encourage it. But keep in mind that adding hundreds of pieces to small composts will greatly slow down the time it will take to decompose. We recommend using larger composts along with your regular compost material for better results.",
      },
   ]

   const qaMobile = [
      {
         q: "Why would you make disposable cutlery out of wood ?",
         a: "Basically speaking, the oil used to make most plastic cutlery is a non-renewable resource that takes thousands of years to decompose. Plastic waste often ends up in landfills, polluting our oceans, and sometimes even ends up killing animals that mistake it for food. Wood is a much better alternative since it is a renewable resource. It is natural and it is biodegradable. And it works.",
      },
      {
         q: "What kind of wood is the cutlery made out of?",
         a: "It's made from birch. Birch is a hardwood that is attractive and doesn't split or splinter very easily.",
      },
      {
         q: "Are there any coatings or chemicals on the cutlery?",
         a: "No. Just birch wood. Nothing else. We do not want to slow down the decomposing process by adding a coating, nor do we want to introduce foreign chemicals to the soil, oceans, lakes, streams, etc.",
      },
      {
         q: "Can I use the cutlery more than once?",
         a: "Well, maybe. You may in some cases find opportunities to use the cutlery more than once, but our cutlery is intended to be used only once.",
      },
      {
         q: "Don't you have to cut down trees to make the cutlery?",
         a: "Yes, but the wood is only taken from plantation forests that are harvested sustainably. The birch trees taken from these forests were planted for the purpose of harvesting and are being harvested for at least a second time. This means that only as much wood is allowed to be taken from the area as can grow back in the same time. The trees are re-planted immediately with the purpose of harvesting them again.",
      },
      {
         q: "How long does it take to decompose?",
         a: "The amount of time depends largely on where and how it is disposed of. If conditions are ideal, the cutlery could completely decompose in about 80 days. In drier conditions it could take much longer. Tests are currently being conducted and we will post the results when they are completed.",
      },
      {
         q: "Can I put the cutlery in my compost?",
         a: "Absolutely. In fact, we encourage it. But keep in mind that adding hundreds of pieces to small composts will greatly slow down the time it will take to decompose. We recommend using larger composts along with your regular compost material for better results.",
      },
   ]

   return (
      <section className={`flex gap-x-3 ${mobileWidth ? "w-full" : "w-3/4"}`}>
         <article className="flex flex-col gap-y-6">
            {mobileWidth
               ? qaMobile.map((qa) => (
                    <QA
                       key={uuidv4()}
                       question={qa.q}
                       answer={
                          <span className="flex flex-col">
                             <p>{qa.a.slice(0, 125)}...</p>
                             <br />
                             <p className="underline self-end text-green-main">
                                more
                             </p>
                          </span>
                       }
                       withIco={false}
                       labelClasses="font-semibold"
                       onClick={() => handleClick(qa.q, <p>{qa.a}</p>)}
                    />
                 ))
               : qa.map((qa) => (
                    <QA
                       key={uuidv4()}
                       question={qa.q}
                       answer={qa.a}
                       withIco={false}
                       labelClasses="font-semibold"
                    />
                 ))}
         </article>

         {mobileWidth ? null : <FSC topVal={"top-34"} leftVal={"left-[70%]"} />}
      </section>
   )
}
