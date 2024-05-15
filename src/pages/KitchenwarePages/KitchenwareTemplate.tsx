import FSC from "../../components/FSC"
import Title from "../../components/Title"
import Listing, { ListingType } from "./Listing"
import { v4 as uuidv4 } from "uuid"

type KitchenwareTemplateProps = {
   headerImg: string
   title: string
   gridCount: number
   listingItems: ListingType[]
   children: React.ReactNode
}

export default function KitchenwareTemplate({
   headerImg,
   title,
   gridCount,
   listingItems,
   children,
}: KitchenwareTemplateProps) {
   const gridTemplateColumns = `repeat(${gridCount}, 1fr)`
   const gridTemplateRows = `repeat(${gridCount}, auto)`

   return (
      <article className="flex flex-col">
         <section className="flex relative">
            <div className="flex-grow">
               <article className="flex flex-col gap-y-6">
                  <header className="flex flex-col gap-y-6">
                     <img
                        src={headerImg}
                        alt={headerImg}
                        style={{
                           maxWidth: "765px",
                           maxHeight: "192px",
                        }}
                     />

                     <span className="flex flex-col gap-y-2 items-center">
                        <Title>{title}</Title>
                        <span className="flex gap-x-3 font-extrabold items-center">
                           <p>Biodegradable</p>
                           <i className="fa-solid fa-circle text-green-main text-xxs" />
                           <p>Compostable</p>
                           <i className="fa-solid fa-circle text-green-main text-xxs" />
                           <p>100% Natural</p>
                        </span>
                     </span>
                  </header>

                  <div
                     style={{
                        display: "grid",
                        gridTemplateColumns,
                        gridTemplateRows,
                     }}
                     className="gap-16"
                  >
                     {listingItems.map((item) => (
                        <Listing key={uuidv4()} {...item} />
                     ))}
                  </div>
               </article>
            </div>

            <FSC addStyles="" topVal={"top-0"} leftVal={"left-3/4"} />
         </section>

         <hr className="border-b-1 mt-32 mb-16 border-graphite" />

         <section>{children}</section>
      </article>
   )
}
