import { ReactNode, useState } from "react"
import { Dialog, DialogTitle, DialogContent } from "@mui/material"

import { QA } from "../../components/QA"
import { usePopup } from "../../context/popupContext"

export default function StepsToCompost() {
   const [open, setOpen] = useState(false)
   const { openPopup } = usePopup()

   const handleClick = (title: string, content: ReactNode) => {
      openPopup(title, content)
   }

   const handleClickOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   return (
      <div>
         <QA
            question="Is this going to be smelly?"
            answer={
               <span className="flex flex-col">
                  <p>
                     <strong>Not if you do it right…</strong>
                     &nbsp; &nbsp;
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                  <br />
                  <p className="underline self-end text-green-main">more</p>
               </span>
            }
            onClick={() =>
               handleClick(
                  "Is this going to be smelly?",
                  <div>
                     <p>
                        <strong>Not if you do it right…</strong> Composting only
                        gets smelly when there is a lack of air or if there is
                        an improper balance between the nitrogen-rich matter
                        (green/wet) and carbon-rich matter (brown/dry). The way
                        to resolve this is to rebalance the pile, aerate it, and
                        make sure the bottom of the pile is not waterlogged.
                     </p>
                     <br />
                     <a
                        onClick={handleClickOpen}
                        className="text-center underline text-green-main cursor-pointer"
                     >
                        Press, to see 10 Easy Steps to Home Composting
                     </a>
                  </div>
               )
            }
         ></QA>

         <Dialog open={open} onClose={handleClose}>
            <DialogTitle
               sx={{
                  fontSize: "1rem",
               }}
            >
               10 Easy Steps to Home Composting
            </DialogTitle>
            <DialogContent>
               <ol className="text-sm flex flex-col gap-y-1">
                  <li>
                     1) Get a garbage pail or container that you keep on the
                     counter or under the sink.
                  </li>
                  <li>
                     2) Post the list of compost matter in plain view so that
                     everyone in the home is clear on what is and isn’t
                     compostable material.
                  </li>
                  <li>
                     3) Purchase a compost bin from your municipality or
                     gardening supplies store, or if possible, make one yourself
                     (see links below).
                  </li>
                  <li>
                     4) Using a shovel, prepare an area for your composter by
                     turning the soil, preferably in a sunny, well-drained area.
                  </li>
                  <li>
                     5) Cover the bottom of the area with a 2 to 3-inch layer (5
                     to 6 cm) of small, dry branches.
                  </li>
                  <li>
                     6) On these branches, place a layer of dry leaves (the
                     disposable palm leaf plates and bowls can also be used here
                     effectively). This step will allow for air circulation and
                     it will also improve drainage, thus helping to prevent the
                     bottom from getting waterlogged.
                  </li>
                  <li>
                     7) Place 2 parts of the carbon-rich matter (brown or dry
                     matter, including the disposable wooden cutlery and palm
                     leaf plates) to 1 part of the nitrogen-rich matter (green
                     or wet matter).
                  </li>
                  <li>
                     {" "}
                     8) Add some finished compost from your last composting
                     batch, or add gardening soil on top of your pile to keep
                     the flies out of the compost bin. Some will also do this to
                     add the necessary bacteria, similar to adding starter to a
                     batch of yogurt.
                  </li>
                  <li>
                     9) You should aerate the compost pile using an aerator or a
                     pitch fork once a week.
                  </li>
                  <li>
                     10) Check the degree of humidity of your compost pile from
                     time to time. If it is dry, you can add water to the
                     compost until the degree of humidity is similar to that of
                     a wrung-out sponge (not a sponge that would let out water
                     if you wring it out). Be very careful with adding water. A
                     little water can go a long way… it is always easier to add
                     water than to remove it!
                  </li>
               </ol>
            </DialogContent>
         </Dialog>
      </div>
   )
}
