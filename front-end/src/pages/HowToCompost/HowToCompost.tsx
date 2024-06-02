import { ReactNode } from "react"
import fsc from "../../../assets/fsc.png"
import { QA } from "../../components/QA"
import Title from "../../components/Title"
import { usePopup } from "../../context/popupContext"
import useWindowSize from "../../hooks/useWindowSize"
import CompostQA from "./CompostQA"
import StepsToCompost from "./StepsToCompost"

export default function HowToCompost() {
   const mobileWidth = !useWindowSize(450)

   const { openPopup } = usePopup()

   const handleClick = (title: string, content: ReactNode) => {
      openPopup(title, content)
   }

   function MobQa1() {
      return (
         <QA
            question="Why should I compost?"
            answer={
               <span className="flex flex-col">
                  <p>
                     Composting will reduce the amount of household refuse
                     generated, on average, by 30 40%...
                  </p>
                  <br />
                  <p className="underline self-end text-green-main">more</p>
               </span>
            }
            onClick={() =>
               handleClick(
                  "Why should I compost?",
                  <ol className="gap-y-1 flex flex-col">
                     <li>
                        1) Composting will reduce the amount of household refuse
                        generated, on average, by 30 - 40%, thereby lowering the
                        cost and the air pollution produced by residual waste
                        transport and disposal.
                     </li>
                     <li>
                        2) Composting will reduce the production of greenhouse
                        gases, which are released when these organic materials
                        decompose and come into contact with heavy metals and
                        other dangerous compounds in landfills.
                     </li>
                     <li>
                        3) It’s good for gardening since your composter will
                        produce nutrient-rich soil for you to use in the garden
                        and in the yard.
                     </li>
                  </ol>
               )
            }
         ></QA>
      )
   }

   function MobQa2() {
      return (
         <QA
            question="Why should I compost?"
            answer={
               <span className="flex flex-col">
                  <p>
                     No matter where you live, and no matter what amount,
                     everyone can do it…
                  </p>
                  <br />
                  <p className="underline self-end text-green-main">more</p>
               </span>
            }
            onClick={() =>
               handleClick(
                  "Where can I compost",
                  <ol className="gap-y-1 flex flex-col">
                     <li>
                        1) If you live in a house, you can start composting in
                        your yard (see the 10 easy steps and links below).
                     </li>
                     <li>
                        2) If you live in an apartment, you can compost small
                        amounts in a bin on your balcony. There are plastic
                        compost bins with lids that are specially designed for
                        smaller spaces.
                     </li>
                     <li>
                        3) And no matter where you live in the United States or
                        Canada, you can almost certainly find a compost facility
                        near you that will accept Eco-gecko disposable wooden
                        cutlery, Eco-gecko disposable palm leaf plates and
                        bowls, and all of your food waste and facility-accepted
                        organic material by searching Biocycle’s website
                        database:{" "}
                        <a
                           href="https://findacomposter.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-green-main font-semibold mt-1 underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200 w-fit"
                        >
                           www.findacomposter.com
                        </a>
                     </li>
                  </ol>
               )
            }
         ></QA>
      )
   }

   return (
      <section className="ml-3 flex flex-col gap-y-4">
         <Title>How to compost</Title>

         <iframe
            className={`${mobileWidth ? "" : "w-3/5 h-96"}`}
            src="https://www.youtube.com/embed/M1kIpCBD3UI"
            title="How to compost"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         ></iframe>

         <section className="flex gap-x-3 w-full">
            <article className="gap-y-4 flex flex-col">
               {mobileWidth ? (
                  <MobQa1 />
               ) : (
                  <QA
                     question="Why should I compost?"
                     answer="Here are 3 very good reasons:"
                  >
                     <ol className="gap-y-1 flex flex-col">
                        <li>
                           1) Composting will reduce the amount of household
                           refuse generated, on average, by 30 - 40%, thereby
                           lowering the cost and the air pollution produced by
                           residual waste transport and disposal.
                        </li>
                        <li>
                           2) Composting will reduce the production of
                           greenhouse gases, which are released when these
                           organic materials decompose and come into contact
                           with heavy metals and other dangerous compounds in
                           landfills.
                        </li>
                        <li>
                           3) It’s good for gardening since your composter will
                           produce nutrient-rich soil for you to use in the
                           garden and in the yard.
                        </li>
                     </ol>
                  </QA>
               )}

               {mobileWidth ? (
                  <MobQa2 />
               ) : (
                  <QA
                     question="Where can I compost disposable wooden cutlery, palm leaf plates, and my other compostable material?"
                     answer="No matter where you live, and no matter what amount, everyone can do it…"
                  >
                     <ol className="gap-y-1 flex flex-col">
                        <li>
                           1) If you live in a house, you can start composting
                           in your yard (see the 10 easy steps and links below).
                        </li>
                        <li>
                           2) If you live in an apartment, you can compost small
                           amounts in a bin on your balcony. There are plastic
                           compost bins with lids that are specially designed
                           for smaller spaces.
                        </li>
                        <li>
                           3) And no matter where you live in the United States
                           or Canada, you can almost certainly find a compost
                           facility near you that will accept Eco-gecko
                           disposable wooden cutlery, Eco-gecko disposable palm
                           leaf plates and bowls, and all of your food waste and
                           facility-accepted organic material by searching
                           Biocycle’s website database:{" "}
                           <a
                              href="https://findacomposter.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-main font-semibold mt-1 underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200 w-fit"
                           >
                              www.findacomposter.com
                           </a>
                        </li>
                     </ol>
                  </QA>
               )}

               {mobileWidth ? (
                  <CompostQA />
               ) : (
                  <QA
                     question="What can I compost?"
                     answer="This list is not inclusive, but should be enough to get you started:"
                  >
                     <div className="grid grid-cols-3 gap-4">
                        <div>
                           <div
                              className="text-center p-2 rounded-lg"
                              style={{
                                 backgroundColor: "rgba(118, 187, 62, 0.5)",
                              }}
                           >
                              <span>
                                 <h1 className="text-base font-semibold">
                                    Nitrogen-rich matter
                                 </h1>
                                 <p>(called green or wet matter)</p>
                              </span>
                           </div>
                           <span className="flex flex-col gap-y-1 pl-4 pt-6">
                              <p>Fresh grass clippings</p>
                              <p>Fresh weed clippings</p>
                              <p>
                                 (Except weeds that have gone to seed or with
                                 persistent root systems)
                              </p>
                              <p>Fruit and vegetable scraps</p>
                              <p>(even rotten)</p>
                              <p>Egg shells</p>
                           </span>
                        </div>

                        <div>
                           <div
                              className="text-center p-2 rounded-lg"
                              style={{
                                 backgroundColor: "rgba(118, 187, 62, 0.5)",
                              }}
                           >
                              <span>
                                 <h1 className="text-lg font-semibold">
                                    Carbon-rich matter
                                 </h1>
                                 <p>(called brown or dry matter)</p>
                              </span>
                           </div>
                           <span className="flex flex-col gap-y-1 pl-4 pt-6">
                              <p>Wood Chips</p>
                              <p>(disposable wooden cutlery included)</p>
                              <p>Dry leaves</p>
                              <p>(palm leaf plates and bowls included)</p>
                              <p>Coffee grounds</p>
                              <p>(including filters)</p>
                              <p>Tea leaves</p>
                              <p>(including bags)</p>
                              <p>Straw/hay</p>
                              <p>Sawdust</p>
                              <p>Napkins</p>
                              <p>Paper</p>
                              <p>(recycling is recommended)</p>
                              <p>Fruit pits</p>
                              <p>Bread</p>
                              <p>Pasta</p>
                              <p>Rice</p>
                              <p>Peanut shells</p>
                              <p>Natural fibers</p>
                              <p>(wool, linen, cotton, untreated leather…)</p>
                           </span>
                        </div>

                        <div>
                           <div
                              className="text-center p-2 rounded-lg"
                              style={{
                                 backgroundColor: "rgba(187, 100, 62, 0.5)",
                              }}
                           >
                              <h1 className="text-lg font-semibold">
                                 Material that should not be composted
                              </h1>
                           </div>
                           <span className="flex flex-col gap-y-1 pl-4 pt-6">
                              <p>Bones</p>
                              <p>Dairy products</p>
                              <p>Meat and Fish</p>
                              <p>Oil</p>
                              <p>(fat)</p>
                              <p>Rhubarb leaves</p>
                              <p>(stalks can be composted)</p>
                              <p>
                                 Weeds that have gone to seed or with persistent
                                 root systems
                              </p>
                              <p>Treated grass</p>
                              <p>Diseased plants or leaves</p>
                              <p>Wood ashes</p>
                              <p>BBQ briquettes</p>
                              <p>Animal or human excrements</p>
                              <p>(can contain pathogens)</p>
                              <p>Vacuum dust</p>
                              <p>
                                 Materials contaminated by pesticides or other
                                 dangerous products
                              </p>
                              <p>(ex. : treated wood)</p>
                              <p>Large quantities of waterlogged material</p>
                           </span>
                        </div>
                     </div>
                  </QA>
               )}

               {mobileWidth ? (
                  <StepsToCompost />
               ) : (
                  <QA
                     question="Is composting going to be smelly?"
                     answer={
                        <p>
                           <strong>Not if you do it right…</strong> Composting
                           only gets smelly when there is a lack of air or if
                           there is an improper balance between the
                           nitrogen-rich matter (green/wet) and carbon-rich
                           matter (brown/dry). The way to resolve this is to
                           rebalance the pile, aerate it, and make sure the
                           bottom of the pile is not waterlogged.
                        </p>
                     }
                  ></QA>
               )}

               {mobileWidth ? null : (
                  <>
                     <h6 className="text-green-main text-sm">
                        Here are 10 Easy Steps to Home Composting
                     </h6>
                     <div className="bg-green-main bg-opacity-20 rounded-lg p-3 flex flex-col gap-y-2">
                        <ol className="ml-7 text-base">
                           <li>
                              1) Get a garbage pail or container that you keep
                              on the counter or under the sink.
                           </li>
                           <br />
                           <li>
                              2) Post the list of compost matter in plain view
                              so that everyone in the home is clear on what is
                              and isn’t compostable material.
                           </li>
                           <br />
                           <li>
                              3) Purchase a compost bin from your municipality
                              or gardening supplies store, or if possible, make
                              one yourself (see links below).
                           </li>
                           <br />
                           <li>
                              4) Using a shovel, prepare an area for your
                              composter by turning the soil, preferably in a
                              sunny, well-drained area.
                           </li>
                           <br />
                           <li>
                              5) Cover the bottom of the area with a 2 to 3-inch
                              layer (5 to 6 cm) of small, dry branches.
                           </li>
                           <br />
                           <li>
                              6) On these branches, place a layer of dry leaves
                              (the disposable palm leaf plates and bowls can
                              also be used here effectively). This step will
                              allow for air circulation and it will also improve
                              drainage, thus helping to prevent the bottom from
                              getting waterlogged.
                           </li>
                           <br />
                           <li>
                              7) Place 2 parts of the carbon-rich matter (brown
                              or dry matter, including the disposable wooden
                              cutlery and palm leaf plates) to 1 part of the
                              nitrogen-rich matter (green or wet matter).
                           </li>
                           <br />
                           <li>
                              8) Add some finished compost from your last
                              composting batch, or add gardening soil on top of
                              your pile to keep the flies out of the compost
                              bin. Some will also do this to add the necessary
                              bacteria, similar to adding starter to a batch of
                              yogurt.
                           </li>
                           <br />
                           <li>
                              9) You should aerate the compost pile using an
                              aerator or a pitch fork once a week.
                           </li>
                           <br />
                           <li>
                              10) Check the degree of humidity of your compost
                              pile from time to time. If it is dry, you can add
                              water to the compost until the degree of humidity
                              is similar to that of a wrung-out sponge (not a
                              sponge that would let out water if you wring it
                              out). Be very careful with adding water. A little
                              water can go a long way… it is always easier to
                              add water than to remove it!
                           </li>
                        </ol>
                     </div>
                  </>
               )}

               <span className="text-sm">
                  <p>
                     As was mentioned in the beginning, composting is good for
                     gardening and the environment. The final product will be
                     rich, dark soil. Take pleasure is using it in your
                     vegetable garden, flower beds, hanging baskets, and on your
                     lawn. And feel good about leaving one less footprint on our
                     beautiful planet!
                  </p>
                  <br />
                  <p>
                     For more information on how to compost, we recommend that
                     you check out the following website:{" "}
                     <a
                        href="http://www.howtocompost.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-main px-1 font-semibold mt-1 underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200 w-fit"
                     >
                        www.howtocompost.org
                     </a>
                  </p>
               </span>
            </article>

            {mobileWidth ? null : (
               <>
                  <div className="border-l-2 border-l-gray h-auto" />

                  <div className="flex flex-col text-xxs w-full">
                     <img src={fsc} alt="FSC" width={100} height={100} />
                     <p>For sales inqiries, please</p>
                     <p>contact us at:</p>
                     <a
                        href="mailto:sales@eco-gecko.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-main px-1 font-semibold mt-1 underline hover:no-underline hover:bg-green-main hover:text-white transition-colors duration-200 w-fit"
                     >
                        sales@eco-gecko.com
                     </a>
                  </div>
               </>
            )}
         </section>
      </section>
   )
}
