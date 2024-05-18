import KitchenwareTemplate from "../KitchenwareTemplate"
import fskHeader from "../../../../assets/kitchenware/fsk-header.jpg"
import img1 from "../../../../assets/kitchenware/forks/1.jpg"
import img2 from "../../../../assets/kitchenware/forks/2.jpg"
import img3 from "../../../../assets/kitchenware/forks/3.jpg"
import img4 from "../../../../assets/kitchenware/forks/wooden-forks-1.jpg"
import { ListingType } from "../Listing"
import CustomLink from "../../../components/CustomLink"
import useWindowSize from "../../../hooks/useWindowSize"
import MobileArticleImg from "../MobileArticleImg"

export default function Forks() {
   const mobileWidth = !useWindowSize(410)

   const listingItems: ListingType[] = [
      {
         img: img1,
         title: { element: "Wooden Forks" },
         subtitle: {
            element: (
               <p className="text-xs ">
                  <b>6.5 inch wooden forks</b>
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
      {
         img: img3,
         title: { element: "Wooden Sporks" },
         subtitle: {
            element: (
               <p>
                  <b>4 inch wooden sporks</b>
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
            gridCount={mobileWidth ? 1 : 3}
            listingItems={listingItems}
         >
            <div className={`${mobileWidth && "ml-5"}`}>
               <h4 className={`font-extrabold ${mobileWidth && "ml-3"}`}>
                  Disposable Wooden Forks
               </h4>
               {mobileWidth && <MobileArticleImg img={img4} />}
            </div>

            <br />
            <p className={`${mobileWidth && "text-sm"}`}>
               Eco-gecko disposable wooden forks are not only beautiful,they are
               also completely functional. These disposable wooden forks are
               very sturdy which allows them to handle salads and meats with
               ease. And unlike many PLA-based products, our wooden forks work
               well with hot or cold foods.{" "}
            </p>
            <br />
            <p className={`${mobileWidth && "text-sm"}`}>
               Wooden forks by Eco-gecko are made of birch wood in a process
               that does not employ the use of any chemicals. Only hot water is
               used to soften the wood for forming and sterilizing. Therefore,
               there are no coatings, waxes, or toxicants of any sort added to
               our naturally beautiful tableware. Because our wooden cutlery are
               all composed of completely organic material, you can compost them
               in your own home composter or drop them off at a commercial
               composting facility.{" "}
            </p>
            <div className="flex gap-x-2">
               <div
                  className={`flex flex-col ${
                     mobileWidth ? "text-sm gap-y-1" : "gap-y-3"
                  }`}
               >
                  {" "}
                  <p>
                     All of our disposable wooden cutlery are made from{" "}
                     <b>FSC®-certified birch wood</b>. This means that the FSC
                     (Forest Stewardship Council) recognizes and certifies that
                     the methods of harvesting and re-planting are being{" "}
                     <b>managed sustainably</b>. So you can feel good knowing
                     that you are using renewable resources wisely.{" "}
                  </p>
                  <p>
                     Our 6 ½ inch compostable wooden forks come in bulk
                     packaging as well as in 100-packs in brown paper canisters.
                     We also offer disposable wooden forks with{" "}
                     <b>customized logos, customized packaging</b>, in a wide{" "}
                     <b>variety of shapes and sizes</b>.{" "}
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
               {!mobileWidth && <img src={img4} alt="Palm forks" />}
            </div>
         </KitchenwareTemplate>
      </section>
   )
}
