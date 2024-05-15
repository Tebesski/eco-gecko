import KitchenwareTemplate from "../KitchenwareTemplate"
import platesHeader from "../../../../assets/kitchenware/plates/plates-header.jpg"
import img1 from "../../../../assets/kitchenware/plates/1.jpg"
import img2 from "../../../../assets/kitchenware/plates/2.jpg"
import img3 from "../../../../assets/kitchenware/plates/3.jpg"
import img4 from "../../../../assets/kitchenware/plates/4.jpg"
import { ListingType } from "../Listing"
import CustomLink from "../../../components/CustomLink"

export default function Plates() {
   const listingItems: ListingType[] = [
      {
         img: img1,
         title: { element: "Square Palm Leaf Plates" },
         subtitle: {
            element: <p className="text-xs ">Available in 4 sizes:</p>,
         },
         info: {
            element: [
               <>
                  <b>10 inch x 10 inch</b>, 100 pieces per case
               </>,
               <li>
                  <b>8 inch x 8 inch</b>, 100 pieces per case
               </li>,
               <li>
                  <b>6 inch x 6 inch</b>, 100 pieces per case
               </li>,
               <li>
                  <b>4 inch x 4 inch</b>, 100 pieces per case
               </li>,
            ],
         },
         listMode: true,
      },
      {
         img: img2,
         title: { element: "Heart Palm Leaf Plates" },
         subtitle: {
            element: <p className="text-xs ">Available in 2 sizes:</p>,
         },
         info: {
            element: [
               <>
                  <b>6.5 inch heart plates</b>, 100 pieces per case
               </>,
               <li>
                  <b>4 inch round plates</b>, 100 pieces per case
               </li>,
            ],
         },
         listMode: true,
      },
      {
         img: img3,
         title: { element: "Paw Palm Leaf Plates" },
         subtitle: {
            element: (
               <p>
                  <b>10 inch X 10 inch plates</b>, 100 pieces per case
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
            headerImg={platesHeader}
            title={"Palm Leaf Plates"}
            gridCount={2}
            listingItems={listingItems}
         >
            <h4 className="font-extrabold">Disposable palm leaf plates</h4>
            <br />
            <p>
               Disposable palm leaf plates by Eco-Gecko are naturally beautiful
               dinnerware made from fallen palm leaves. These wooden plates are
               engineered to be more than durable. With something this{" "}
               <b>beautiful</b> and this <b>strong</b>, you will be surprised
               that our disposable plates are designed for one use. The{" "}
               <b>natural beauty and strength</b> of these palm leaf plates make
               them the perfect single-use tableware, suitable for any occasion.
               Our disposable wooden plates and bowls are <b>green and mean</b>
               ... So go ahead and load them up!
            </p>
            <br />
            <div className="flex gap-x-2">
               <div className="flex flex-col gap-y-3">
                  <p>
                     Our line of palm leaf tableware was designed to provide an{" "}
                     <b>eco-friendly alternative</b> to the non-biodegrading
                     disposable plates used for so many years in the food
                     industry. It would be{" "}
                     <b>hard to find anything more eco-friendly</b> than dinner
                     plates and bowls made from fallen palm leaves which in the
                     past <b>were often collected and burned</b>. So not only
                     does using this natural by-product from areca palm trees
                     stop the senseless burning of a useful product, but it also{" "}
                     <b>
                        serves as a biodegradable and compostable alternative to
                        plastic and Styrofoam dinnerware.
                     </b>
                  </p>
                  <br />
                  <p>
                     In addition to our palm leaf tableware, the boxes and
                     cartons used to package our biodegradable and compostable
                     cutlery, plates and bowls are made from{" "}
                     <b>recycled paper products</b>. Geckos don’t leave
                     footprints, and neither will you when you use wooden
                     disposable cutlery by Eco-gecko.
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
               <img src={img4} alt="Palm leaf plates heart shaped" />
            </div>
         </KitchenwareTemplate>
      </section>
   )
}
