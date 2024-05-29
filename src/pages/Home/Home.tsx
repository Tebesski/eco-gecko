import Slider from "./Slider"
import woodenCutlery from "../../../assets/wooden-cutlery.jpg"
import palmLeafPlates from "../../../assets/palm-leaf-plates.jpg"
import woodenKsf from "../../../assets/wooden-knife-spoon-fork.jpg"
import Title from "../../components/Title"
import useWindowSize from "../../hooks/useWindowSize"

export default function Home() {
   const mobileWidth = !useWindowSize(450)

   const FSC = () => {
      return (
         <div
            className={`border border-black rounded-2xl p-4 flex flex-col items-center justify-center gap-y-4 ${
               mobileWidth && "text-xs p-1 gap-y-0 text-center"
            }`}
         >
            <h6>
               <b>FSC® Certified</b>
            </h6>
            <p>
               Eco-Gecko Creation LLC carries Forest Stewardship Council™ Chain
               of Custody certification. FSC certification ensures that wood
               comes from well-managed forests. Contact us to learn more about
               our FSC certified products.
            </p>
         </div>
      )
   }

   return (
      <section className={`flex flex-col gap-y-3`}>
         <header className="">
            <Slider />
         </header>

         <article className="flex flex-col gap-y-6">
            <Title>Wooden cutlery and palm leaf plates by eco-gecko</Title>

            <div
               className={`flex flex-col gap-y-2 ${
                  mobileWidth ? "text-xs" : "text-lg"
               }`}
            >
               <span>
                  <b>The products:</b> Our disposable, biodegradable, and
                  compostable wooden cutlery is <b>100% natural</b> and is made
                  of birch wood while our eco-friendly palm leaf plates and
                  bowls are made from fallen palm leaves. These wooden knives
                  can cut steak, and the wooden forks can handle salads.
                  Eco-Gecko disposable cutlery and tableware all work well with
                  hot or cold foods. There are{" "}
                  <b>no coatings, waxes, or chemicals</b> of any sort added to
                  our naturally beautiful tableware. Therefore, all of our
                  disposable tableware products are <b>free</b> of toxicants and
                  are accepted at all composting facilities on the basis of
                  being composed of <b>completely organic</b> material.
               </span>

               {mobileWidth && (
                  <div className="border-green-main border-1 p-4">
                     <img src={woodenCutlery} alt="Wooden cutlery" />
                  </div>
               )}

               <div
                  className={`flex gap-x-4 ${
                     mobileWidth ? "text-xs" : "text-lg"
                  }`}
               >
                  <span className={`${!mobileWidth && "w-3/4"}`}>
                     <p>
                        <b>The reason:</b> Biodegradable and compostable wooden
                        cutlery and palm leaf tableware by Eco-Gecko were
                        designed to provide an <b>eco-friendly alternative</b>{" "}
                        to the non-biodegrading disposable plastic cutlery and
                        Styrofoam plates used so commonly in the food industry.
                        Not only are these disposable petroleum-based utensils,
                        plates, and bowls not biodegradable or compostable, but
                        they often end up in landfills, polluting oceans, or
                        even killing animals when they mistake these for food.
                     </p>
                     <br />
                     <p>
                        <b>The “eco”:</b> Just how eco-friendly is our
                        disposable tableware? Eco-Gecko disposable wooden
                        cutlery are made from <b>FSC-certified birch wood</b>.
                        What does this mean? It means that the FSC (Forest
                        Stewardship Council) recognizes and certifies that the
                        methods of harvesting and re-planting are being{" "}
                        <b>managed sustainably.</b>
                     </p>
                  </span>

                  {!mobileWidth && (
                     <div className="border-green-main border-1 p-4">
                        <img src={woodenCutlery} alt="Wooden cutlery" />
                     </div>
                  )}
               </div>
            </div>
         </article>

         {mobileWidth && <FSC />}

         <article className="flex gap-x-8">
            {!mobileWidth && <FSC />}

            <span
               className={`flex flex-col text-sm gap-y-2 ${
                  mobileWidth ? "text-xs" : "text-lg"
               }`}
            >
               <p className={`${mobileWidth ? "text-xs" : "text-lg"}`}>
                  As for our palm leaf plates and bowls, it would be{" "}
                  <b>hard to find anything more eco-friendly</b> than disposable
                  dinnerware made from fallen palm leaves which in the past{" "}
                  <b>would likely have been collected and burned</b>. So not
                  only does using this natural by-product from areca palm trees
                  stop the burning and subsequent polluting of the air, but it
                  also{" "}
                  <b>
                     serves as a biodegradable and compostable alternative to
                     plastic and Styrofoam dinnerware
                  </b>
                  . When composted, it also{" "}
                  <b>contributes to producing nutrient-rich topsoil.</b>
               </p>
               <br />
               <p className={`${mobileWidth ? "text-xs" : "text-lg"}`}>
                  In addition to our tableware, the boxes and cartons used to
                  package our biodegradable and disposable cutlery, plates and
                  bowls are made from <b>recycled paper products</b>. Geckos
                  don’t leave footprints, and neither will you when you use
                  wooden disposable cutlery by Eco-Gecko. Kermit had it all
                  wrong… it’s easy being green!
               </p>
            </span>
         </article>

         <article
            className={`flex flex-col text-sm gap-y-2 ${
               mobileWidth ? "text-xs" : "text-lg"
            }`}
         >
            <p className={`${mobileWidth ? "text-xs" : "text-lg"}`}>
               <b>The quality:</b> The <b>natural beauty and strength</b> of the
               birch wood makes for stylish yet functional cutlery, as well. So
               whether you are planning an office party, an outdoor event, a
               dinner party, or for daily use in your office or restaurant, our
               biodegradable and compostable wooden cutlery are the{" "}
               <b>perfect utensils for your needs</b>. And since birch is a
               <b>hardwood</b>, the edges are even <b>smoother</b> than other
               wooden disposable cutlery on the market, which makes them
               <b>completely safe</b> for children to use. No toxins, no
               chemicals, just high-quality disposable tableware… made from
               natural and renewable resources.
            </p>
         </article>

         {mobileWidth && (
            <img
               src={palmLeafPlates}
               alt="Palm leaf plates"
               className="w-80 h-40"
            />
         )}

         <article>
            <div
               className={`flex gap-x-8 ${mobileWidth ? "text-xs" : "text-lg"}`}
            >
               {!mobileWidth && (
                  <img
                     src={palmLeafPlates}
                     alt="Palm leaf plates"
                     className="w-fit h-fit"
                  />
               )}
               <span>
                  <p>
                     With something this <b>beautiful</b> and this <b>strong</b>
                     , you will be surprised that our palm leaf plates are
                     designed for one use. Their{" "}
                     <b>natural beauty and strength</b>
                     make them the perfect single-use tableware, no matter what
                     you plan to serve on them. The plates are engineered to be
                     more than durable, and the bowls can hold hot soup with
                     ease. Our palm leaf plates and bowls are{" "}
                     <b>green and mean</b>... So go ahead and load them up!
                  </p>
                  <br />
                  <p>
                     <b>The places:</b> From <b>high-end catered events</b> to{" "}
                     <b>take-out</b> restaurants… and from <b>wineries</b> to
                     office <b>lunch rooms</b>... The list of places that are
                     already enjoying our biodegradable and compostable
                     dinnerware is nearly endless. Wherever a fully functional
                     yet eco-friendly disposable utensil or plate is needed, you
                     can find us. Come on, <b>everyone’s doing it</b>…
                  </p>
               </span>
            </div>
         </article>

         <article className={`${mobileWidth ? "text-xs" : "text-lg"}`}>
            <p>
               <b>The cost:</b> Eco-Gecko biodegradable and compostable
               tableware is not only natural and stylish, but they are also{" "}
               <b>very affordable</b>. Unlike some eco-friendly disposable
               products which make it difficult to{" "}
               <b>“go green” while staying “in the black”</b>, our biodegradable
               cutlery is priced comparably to high-end disposable plastic
               utensils. And our palm leaf plates and bowls are amazingly
               affordable for naturally beautiful tableware that will impress
               your guests. At this price,{" "}
               <b>you can’t afford not to go green!</b>
            </p>
         </article>

         {mobileWidth && (
            <img src={woodenKsf} alt="Wooden cutlery" className="" />
         )}

         <article>
            <div
               className={`flex gap-x-8 ${
                  mobileWidth ? "text-xs" : "text-lg w-11/12"
               }`}
            >
               <span>
                  <p>
                     <b>The purchase:</b> Buying Eco Gecko biodegradable and
                     compostable tableware has never been easier! Whether you
                     are looking to put the finishing touches on your decor with
                     the warming, natural palette of our wooden cutlery and
                     classic palm leaf plates and bowls, or are interested in
                     spicing up your table with plates featuring customized
                     logos and designs, our sales staff will be able to help!{" "}
                     <a
                        href="/contact-us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-main font-semibold underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200"
                     >
                        Contact our helpful staff
                     </a>{" "}
                     to explore our growing line of wooden cutlery and palm leaf
                     plates and bowls to find a style and size to suit your
                     needs!
                  </p>
                  <br />
                  <p>
                     <b>The options:</b> Looking for something unique? Want to
                     make that holiday party more festive, or memorialize that
                     event? Consider adding a customizable design to your plates
                     and bowls! Using a process called "hot stamping," our
                     talented staff can design and craft a stamping die which
                     will safely add that unique touch to our palm leaf plates
                     and bowls. Choose from our pre-made festive designs, or
                     discuss your own design ideas with our helpful staff.{" "}
                     <a
                        href="/contact-us"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-main font-semibold underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200"
                     >
                        Contact our helpful staff
                     </a>{" "}
                     to learn how Eco-Gecko can personalize our products!
                  </p>
               </span>

               {!mobileWidth && (
                  <img
                     src={woodenKsf}
                     alt="Wooden cutlery"
                     className="h-full"
                  />
               )}
            </div>
         </article>

         <article className={`${mobileWidth ? "text-xs" : "text-lg"}`}>
            <p>
               <b>The info:</b> If you have any questions about Eco-Gecko
               biodegradable and compostable wooden cutlery or our other
               disposable dinnerware, you can{" "}
               <a
                  href="/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-main font-semibold underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200"
               >
                  check out our FAQ page
               </a>
               , or get more information by{" "}
               <a
                  href="/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-main font-semibold underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200"
               >
                  contacting our helpful staff
               </a>{" "}
               now. If you have all the information you need, then feel free to
               just{" "}
               <a
                  href="mailto:sales@eco-gecko.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-main font-semibold underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200"
               >
                  email us
               </a>{" "}
               and say hello…
            </p>
         </article>
      </section>
   )
}
