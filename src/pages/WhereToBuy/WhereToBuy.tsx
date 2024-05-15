import FSC from "../../components/FSC"
import Title from "../../components/Title"
import fcis from "../../../assets/where-to-buy/fcis_logo.jpg"
import hl from "../../../assets/where-to-buy/Highlandlogo.jpg"
import lgg from "../../../assets/where-to-buy/LGG_logo.jpg"
import mf from "../../../assets/where-to-buy/Mansfield-logo.jpg"
import trs from "../../../assets/where-to-buy/TheRestaurantStore-Logo-360.jpg"
import blais from "../../../assets/where-to-buy/blaisdells-logo.jpg"
import id from "../../../assets/where-to-buy/imperial-dade-logo.jpg"
import uls from "../../../assets/where-to-buy/ui_logo_south.jpg"
import web from "../../../assets/where-to-buy/webstaurantstore-logo-360.jpg"
import yes from "../../../assets/yes.png"

export default function WhereToBuy() {
   function generateTableCells(
      img1: string,
      img2?: string,
      img3?: string,
      img4?: string,
      border: boolean = true
   ) {
      return (
         <>
            <td className={`${border ? "border-b-2 p-4" : ""}`}>
               {img1 && <img src={img1} alt="img1" />}
            </td>
            <td className={`${border ? "" : ""}`}>
               {img2 && <img src={img2} alt="img2" />}
            </td>
            <td className={`${border ? "" : ""}`}>
               {img3 && <img src={img3} alt="img3" />}
            </td>
            <td className={`${border ? "" : ""}`}>
               {img4 && <img src={img4} alt="img4" />}
            </td>
         </>
      )
   }

   return (
      <section className="flex gap-x-3">
         <div className="gap-y-3">
            <Title addStyles="mt-4 mb-4">
               Wholesale Distributors of Eco-Gecko Products
            </Title>

            <table className="">
               <tbody>
                  {/* 1st row */}
                  <tr>
                     <td></td>
                     <td>
                        <p className="w-2/3 text-center">
                           <b>Wooden cutlery</b>
                        </p>
                     </td>
                     <td>
                        <p className="w-2/3 text-center">
                           <b>Palm Leaf Plates</b>
                        </p>
                     </td>
                     <td>
                        <p className="w-2/3 text-center">
                           <b>Palm Leaf Bowls</b>
                        </p>
                     </td>
                  </tr>
                  {/* 2nd row */}
                  <tr>{generateTableCells(fcis, yes, yes, yes)}</tr>
                  {/* 3rd row */}
                  <tr>{generateTableCells(id, yes, yes)}</tr>
                  {/* 4th row */}
                  <tr>{generateTableCells(uls, yes, yes)}</tr>
                  {/* 5th row */}
                  <tr>{generateTableCells(mf, undefined, yes, undefined)}</tr>
                  {/* 6th row */}
                  <tr>{generateTableCells(hl, yes, yes)}</tr>
                  {/* 7th row */}
                  <tr>{generateTableCells(blais, yes)}</tr>
                  {/* 8th row */}
                  <tr>{generateTableCells(web, yes, yes, yes)}</tr>
                  {/* 9th row */}
                  <tr>
                     <td className="border-b-2 p-4">
                        <img src={trs} alt="trs" />
                     </td>
                     <td className="border-b-2">
                        <img src={yes} alt="yes" />
                     </td>
                     <td className="border-b-2">
                        <img src={yes} alt="yes" />
                     </td>
                     <td className="border-b-2">
                        <img src={yes} alt="yes" />
                     </td>
                  </tr>
                  {/* Tenth row */}
                  <tr>
                     <td colSpan={4} className="pt-10 pb-5">
                        <Title>Online Retail</Title>
                     </td>
                  </tr>
                  {/* Eleventh row */}
                  <tr>
                     <td className="flex justify-center border border-green-main hover:outline-green-main transition-all duration-200 cursor-pointer">
                        <a
                           href="https://letsgogreen.biz/search?type=product&q=Eco-gecko"
                           target="_blank"
                        >
                           <img src={lgg} alt="trs" />
                        </a>
                     </td>
                     <td>
                        <img src={yes} alt="yes" />
                     </td>
                     <td>
                        <img src={yes} alt="yes" />
                     </td>
                     <td>
                        <img src={yes} alt="yes" />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>

         <FSC topVal={"top-34"} leftVal={"left-[70%]"} />
      </section>
   )
}
