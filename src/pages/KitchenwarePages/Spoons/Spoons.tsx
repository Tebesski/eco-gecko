import KitchenwareTemplate from "../KitchenwareTemplate"
import fskHeader from "../../../../assets/kitchenware/fsk-header.jpg"
import img1 from "../../../../assets/kitchenware/spoons/1.jpg"
import img2 from "../../../../assets/kitchenware/spoons/2.jpg"
import img3 from "../../../../assets/kitchenware/spoons/3.jpg"
import img4 from "../../../../assets/kitchenware/spoons/4.jpg"
import img5 from "../../../../assets/kitchenware/spoons/5.jpg"
import { ListingType } from "../Listing"
import CustomLink from "../../../components/CustomLink"

export default function Spoons() {
   const listingItems: ListingType[] = [
      {
         img: img1,
         title: { element: "Wooden Spoons" },
         subtitle: {
            element: (
               <p className="text-xs ">
                  <b>6.5 inch wooden spoons</b>
               </p>
            ),
         },
         info: {
            element: <p>in 1000-pack bulk packaging</p>,
         },
         listMode: false,
      },
      {
         img: img2,
         title: { element: "Small Wooden Spoons" },
         subtitle: {
            element: (
               <p className="text-xs ">
                  <b>4.25 inch wooden spoons</b> in 1000-pack
               </p>
            ),
         },
         info: {
            element: <></>,
         },
         listMode: false,
      },
      {
         img: img3,
         title: { element: "Wooden Taster Spoons" },
         subtitle: {
            element: (
               <p>
                  <b>3.75 inch wooden taster spoons</b> in 1000-pack
               </p>
            ),
         },
         info: { element: <></> },
         listMode: false,
      },
      {
         img: img4,
         title: { element: "Cutlery in Paper Packs" },
         subtitle: {
            element: (
               <p>
                  <b>6.5 inch fork, knife, and spoon set</b>
               </p>
            ),
         },
         info: { element: <></> },
         listMode: false,
      },
   ]
   return (
      <section>
         <KitchenwareTemplate
            headerImg={fskHeader}
            title={"Disposable Wooden Forks"}
            gridCount={3}
            listingItems={listingItems}
         >
            <h4 className="font-extrabold">Disposable Wooden Spoons</h4>
            <br />
            <div className="flex gap-x-2">
               <div className="flex flex-col gap-y-3">
                  <p>
                     The <b>natural beauty and strength</b> of birch wood make
                     for stylish, yet functional, disposable wooden spoons. So
                     whether you are planning an office party, an outdoor event,
                     a dinner party, or for daily use in your office, restaurant
                     or for food sampling, our biodegradable and compostable
                     wooden spoons are the <b>perfect utensil for your needs</b>
                     . And since birch is a <b>hardwood</b>, the edges are even
                     <b>smoother</b> than other wooden cutlery on the market,
                     which makes them <b>completely safe</b> for children to
                     use. No toxins, no chemicals, just high-quality disposable
                     tableware… made from natural and renewable resources.{" "}
                  </p>
                  <br />
                  <div className="flex">
                     <div className="flex flex-col gap-y-2">
                        <p>
                           We all need to be aware of the impact our choices
                           have on the planet. You’ll be happy to know that the
                           FSC® (Forest Stewardship Council) recognizes and
                           certifies that the methods of harvesting and
                           re-planting are being <b>managed sustainably</b>. So
                           let each one of us do our part by supporting the
                           sustainable use of renewable resources and by
                           choosing FSC-certified products. Going green has
                           never been easier…{" "}
                        </p>
                        <br />
                        <p>
                           Our current line of 6 ½ inch, 4 ½ inch, and 3 ¾ inch
                           disposable wooden spoons are all available in bulk
                           packaging as well as 6 ½ inch wooden spoons in brown
                           paper canisters. We also offer disposable wooden
                           spoons with
                           <b>customized logos, customized packaging</b>, in a
                           wide <b>variety of shapes and sizes</b>.
                        </p>
                     </div>
                     <img src={img5} alt="Disposable wooden spoons" />
                  </div>
                  <p>
                     If you have any questions about Eco-gecko one-time-use palm
                     leaf plates, you can{" "}
                     <CustomLink href={"/faq"}>
                        check out our FAQ page
                     </CustomLink>
                     , or get more information by{" "}
                     <CustomLink href={"/contact-us"}>
                        contacting our helpful staff{" "}
                     </CustomLink>
                     now.
                  </p>
               </div>
            </div>
         </KitchenwareTemplate>
      </section>
   )
}
