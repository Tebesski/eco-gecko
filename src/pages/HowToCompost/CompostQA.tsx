import { useState } from "react"
import { QA } from "../../components/QA"
import {
   Dialog,
   DialogTitle,
   DialogContent,
   DialogActions,
} from "@mui/material"

const CompostQA = () => {
   const [currentColumn, setCurrentColumn] = useState(0)
   const [isOpen, setIsOpen] = useState(false)

   const columns = [
      {
         title: "Nitrogen-rich matter",
         subtitle: "(called green or wet matter)",
         items: [
            "Fresh grass clippings",
            "Fresh weed clippings",
            "(Except weeds that have gone to seed or with persistent root systems)",
            "Fruit and vegetable scraps",
            "(even rotten)",
            "Egg shells",
         ],
         backgroundColor: "rgba(118, 187, 62, 0.5)",
      },
      {
         title: "Carbon-rich matter",
         subtitle: "(called brown or dry matter)",
         items: [
            "Wood Chips",
            "(disposable wooden cutlery included)",
            "Dry leaves",
            "(palm leaf plates and bowls included)",
            "Coffee grounds",
            "(including filters)",
            "Tea leaves",
            "(including bags)",
            "Straw/hay",
            "Sawdust",
            "Napkins",
            "Paper",
            "(recycling is recommended)",
            "Fruit pits",
            "Bread",
            "Pasta",
            "Rice",
            "Peanut shells",
            "Natural fibers",
            "(wool, linen, cotton, untreated leather…)",
         ],
         backgroundColor: "rgba(118, 187, 62, 0.5)",
      },
      {
         title: "Should not be composted",
         items: [
            "Bones",
            "Dairy products",
            "Meat and Fish",
            "Oil",
            "(fat)",
            "Rhubarb leaves",
            "(stalks can be composted)",
            "Weeds that have gone to seed or with persistent root systems",
            "Treated grass",
            "Diseased plants or leaves",
            "Wood ashes",
            "BBQ briquettes",
            "Animal or human excrements",
            "(can contain pathogens)",
            "Vacuum dust",
            "Materials contaminated by pesticides or other dangerous products",
            "(ex. : treated wood)",
            "Large quantities of waterlogged material",
         ],
         backgroundColor: "rgba(187, 100, 62, 0.5)",
      },
   ]

   const handleClickNext = () => {
      setCurrentColumn((prev) => (prev + 1) % columns.length)
   }

   const handleClickPrev = () => {
      setCurrentColumn((prev) => (prev - 1 + columns.length) % columns.length)
   }

   const handleClick = () => {
      setIsOpen(true)
   }

   const handleClose = () => {
      setIsOpen(false)
   }

   return (
      <div>
         <QA
            question="What can I compost?"
            answer={
               <span className="flex flex-col">
                  <p>
                     This list is not inclusive, but should be enough to get you
                     started...
                  </p>
                  <br />
                  <p className="underline self-end text-green-main">more</p>
               </span>
            }
            onClick={handleClick}
         />
         <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle
               sx={{
                  backgroundColor: columns[currentColumn].backgroundColor,
                  color: "graphite",
                  textAlign: "center",
                  height: "96px",
               }}
            >
               <p>{columns[currentColumn].title}</p>
               <p>{columns[currentColumn].subtitle}</p>
            </DialogTitle>
            <DialogContent>
               <span className="flex flex-col gap-y-1 p-3 text-center">
                  {columns[currentColumn].items.map((item, index) => (
                     <p
                        key={index}
                        style={{
                           fontWeight: index % 2 === 0 ? "bold" : "normal",
                        }}
                     >
                        {item}
                     </p>
                  ))}
               </span>
            </DialogContent>
            <DialogActions
               sx={{
                  display: "flex",
                  justifyContent: "space-around",
               }}
            >
               <a
                  className="cursor-pointer underline"
                  onClick={handleClickPrev}
               >
                  Previous
               </a>
               <a
                  className="cursor-pointer underline"
                  onClick={handleClickNext}
               >
                  Next
               </a>
            </DialogActions>
         </Dialog>
      </div>
   )
}

export default CompostQA
