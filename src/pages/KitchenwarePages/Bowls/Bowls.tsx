import KitchenwareTemplate from "../KitchenwareTemplate"
import bowlsHeader from "../../../../assets/kitchenware/bowls/bowls-header.jpg"
import img1 from "../../../../assets/kitchenware/bowls/1.jpg"
import img2 from "../../../../assets/kitchenware/bowls/2.jpg"
import img3 from "../../../../assets/kitchenware/bowls/3.jpg"
import img4 from "../../../../assets/kitchenware/bowls/4.jpg"
import { ListingType } from "../Listing"
import CustomLink from "../../../components/CustomLink"
import MobileArticleImg from "../MobileArticleImg"
import useWindowSize from "../../../hooks/useWindowSize"

export default function Bowls() {
   const mobileWidth = !useWindowSize(450)

   const listingItems: ListingType[] = [
      {
         img: img1,
         title: { element: "Square Palm Leaf Bowls" },
         subtitle: {
            element: <p className="text-xs ">Available in 2 sizes:</p>,
         },
         info: {
            element: [
               <li>
                  <b>5 inch x 5 inch</b>, 100 pieces per case
               </li>,
               <li>
                  <b>4 inch x 4 inch</b>, 200 pieces per case
               </li>,
            ],
         },
         listMode: true,
      },
      {
         img: img2,
         title: { element: "Round Palm Leaf Bowls" },
         subtitle: {
            element: <p className="text-xs ">Available in 3 sizes:</p>,
         },
         info: {
            element: [
               <li>
                  <b>8.5 inch round bowls</b>, 100 pieces per case
               </li>,
               <li>
                  <b>4 inch round bowls</b>, 100 pieces per case
               </li>,
               <li>
                  <b>4 inch round bowls</b>, 200 pieces per case
               </li>,
            ],
         },
         listMode: true,
      },
      {
         img: img3,
         title: { element: "Square Palm Leaf Sauce Bowls" },
         subtitle: {
            element: (
               <p>
                  <b>2 inch square sauce bowls</b>, 200 pieces per case
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
            headerImg={bowlsHeader}
            title={"Palm Leaf Bowls"}
            gridCount={2}
            listingItems={listingItems}
         >
            <h4 className="font-extrabold">Palm Leaf Bowls</h4>
            {mobileWidth && <MobileArticleImg img={img4} />}
            <br />
            <div className="flex gap-x-2">
               <div
                  className={`flex flex-col ${
                     mobileWidth ? "text-sm gap-y-2" : "gap-y-3"
                  }`}
               >
                  <p>
                     Beautiful, strong, and smart… Our line of palm leaf bowls
                     is designed to provide an <b>eco-friendly alternative</b>{" "}
                     to the non-biodegrading disposable bowls that are overused
                     in the food industry. It would be{" "}
                     <b>difficult to find anything more earth-friendly</b> than
                     wooden bowls made from fallen palm leaves which in the past{" "}
                     <b>were often discarded and burned</b>. So using this
                     natural by-product from areca palm trees not only stops the
                     senseless burning of a useful product, but it also{" "}
                     <b>
                        stands out as a stunningly gorgeous piece of disposable
                        dinnerware that is second to none
                     </b>
                     . So if you are planning a wedding or a catered event that
                     requires beautiful yet sturdy dinnerware, look no further.
                     You won’t be disappointed with Eco-gecko palm leaf bowls!
                  </p>
                  <br />
                  <p>
                     And reducing your carbon footprint doesn’t stop here… Even
                     the boxes and cartons used to package our wooden bowls are
                     made from <b>recycled paper products</b>. Geckos don’t
                     leave footprints, and neither will you when you use
                     disposable palm leaf bowls by Eco-gecko.
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
               {!mobileWidth && <img src={img4} alt="Palm leaf bowls" />}
            </div>
         </KitchenwareTemplate>
      </section>
   )
}
