import KitchenwareTemplate from "../KitchenwareTemplate"
import fskHeader from "../../../../assets/kitchenware/fsk-header.jpg"
import img1 from "../../../../assets/kitchenware/knives/1.jpg"
import img2 from "../../../../assets/kitchenware/knives/2.jpg"
import img3 from "../../../../assets/kitchenware/knives/3.jpg"
import { ListingType } from "../Listing"
import CustomLink from "../../../components/CustomLink"
import useWindowSize from "../../../hooks/useWindowSize"
import MobileArticleImg from "../MobileArticleImg"

export default function Knives() {
   const mobileWidth = !useWindowSize(450)

   const listingItems: ListingType[] = [
      {
         img: img1,
         title: { element: "Wooden Knives" },
         subtitle: {
            element: (
               <p className="text-xs ">
                  <b>6.5 inch wooden knives</b>
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
         title: { element: "Cutlery in Paper Packs" },
         subtitle: {
            element: (
               <p className="text-xs ">
                  <b>6.5 inch fork, knife, and spoon set</b>
               </p>
            ),
         },
         info: {
            element: <></>,
         },
         listMode: false,
      },
   ]
   return (
      <section>
         <KitchenwareTemplate
            headerImg={fskHeader}
            title={"Disposable Wooden Forks"}
            gridCount={mobileWidth ? 1 : 3}
            listingItems={listingItems}
         >
            <div className={`${mobileWidth && "ml-5"}`}>
               <h4 className={`font-extrabold ${mobileWidth && "ml-3"}`}>
                  Disposable Wooden Knives
               </h4>
               {mobileWidth && <MobileArticleImg img={img3} />}
            </div>
            <br />
            <p className={`${mobileWidth && "text-sm"}`}>
               Eco-gecko disposable knives are not only an environmentally smart
               decision, but they are also completely functional. Many of our
               customers have been surprised to find out that these disposable
               knives could even cut steak. And unlike many PLA-based products,
               our wooden cutlery work well with hot or cold foods.
            </p>
            <br />
            <p className={`${mobileWidth && "text-sm"}`}>
               Wooden knives by Eco-gecko are made of birch wood in a process
               that does not employ the use of any chemicals. Only hot water is
               used to soften the wood for forming and sterilizing. Therefore,
               there are <b>no coatings, waxes, or toxicants</b> of any sort
               added to our naturally beautiful tableware. Because our wooden
               cutlery are all composed of <b>completely organic</b> material,
               you can compost them in your own home composter or drop them off
               at a commercial composting facility.
            </p>
            <div className="flex gap-x-2">
               <div
                  className={`flex flex-col ${
                     mobileWidth ? "text-sm gap-y-1" : "gap-y-3"
                  }`}
               >
                  {" "}
                  <p>
                     One more reason to feel good about our disposable wooden
                     knives and cutlery is that the FSC® (Forest Stewardship
                     Council) recognizes and certifies that the methods of
                     harvesting and re-planting are being{" "}
                     <b>managed sustainably</b>. So let each one of us do our
                     part and support the sustainable use of renewable resources
                     by choosing FS certified products. Going green has never
                     been easier…
                  </p>
                  <p>
                     Aside from our current stock of 6 ½ inch disposable wooden
                     knives in bulk and in brown paper canisters, disposable
                     wooden knives with{" "}
                     <b>customized logos, customized packaging</b>, in a wide{" "}
                     <b>variety of sizes</b> are also available.
                  </p>
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
               {!mobileWidth && <img src={img3} alt="Palm knives" />}{" "}
            </div>
         </KitchenwareTemplate>
      </section>
   )
}
