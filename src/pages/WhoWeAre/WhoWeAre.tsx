import fsc from "../../../assets/fsc.png"
import gecko from "../../../assets/gecko.png"
import logo from "../../../assets/logo.png"
import { v4 as uuidv4 } from "uuid"
import useWindowSize from "../../hooks/useWindowSize"

export default function WhoWeAre() {
   const mobileWidth = !useWindowSize(410)

   const mobileTexts = [
      <p>
         We are developing and producing disposable cutlery and tableware that
         are convenient for use in our modern world and are made from{" "}
         <b>RENEWABLE</b> resources.
      </p>,
      <p>
         Due to the gecko’s ability to cast off and regenerate its tail, it has
         long been a symbol of <b>RENEWABILITY</b> among certain native tribes
         in North America.
      </p>,
      <p>
         All of our products are made from resources that are harvested in a{" "}
         <b>SUSTAINABLE</b> way. This means that they can be re-grown and
         re-harvested over and over again.
      </p>,
      <p>
         It takes about three weeks for geckos to completely regenerate a new
         tail. They can shed their tails over and over, making it a{" "}
         <b>SUSTAINABLE</b> practice.
      </p>,
      <p>
         The overuse of non-biodegradable resources has created a generation
         that want to <b>REDUCE</b> their <b>“CARBON FOOTPRINT”</b>. Our
         products are 100% biodegradable.
      </p>,
      <p>
         Geckos have specialized toe pads that let them climb vertical surfaces,
         thus, through better techniques, they <b>LEAVE NO</b> sticky{" "}
         <b>FOOTPRINTS</b> behind.
      </p>,
      <p>
         Many have thought that environmentally responsible products are
         unattractive. It is our goal to make sure our products are even more{" "}
         <b>ATTRACTIVE</b> than the others.
      </p>,
      <p>
         Let’s face it, geckos are cute and lovable. Even if you don’t like
         lizards, you have to admit that geckos are the most <b>ATTRACTIVE</b>{" "}
         reptiles out there.
      </p>,
   ]

   const items = mobileTexts
      ? mobileTexts
      : [
           <p>
              We are dedicated to developing and producing disposable cutlery
              and tableware that are convenient for use in our modern world, but
              that are made from <b>RENEWABLE</b> resources.
           </p>,

           <p>
              Due to the gecko’s ability to cast off and regenerate its tail, it
              has long been a symbol of <b>RENEWABILITY</b> among certain native
              tribes in North America.
           </p>,

           <p>
              All of our products are made from resources that are harvested in
              a <b>SUSTAINABLE</b> way. This means that they can be re-grown and
              re-harvested over and over again.
           </p>,
           <p>
              It takes about three weeks for geckos to completely regenerate a
              new tail. They can shed their tails over and over again, thus
              making it a <b>SUSTAINABLE</b> practice.
           </p>,
           <p>
              The overuse of natural resources that are not biodegradable has
              created a generation that is interested in <b>REDUCING</b> their{" "}
              <b>“CARBON FOOTPRINT”</b>. Since this is also our goal, Eco-gecko
              products are made using better techniques and are 100%
              biodegradable.
           </p>,
           <p>
              Geckos have specialized toe pads that employ molecular science,
              enabling the gecko to climb smooth vertical surfaces. They’re not
              just a set of sticky feet, as once assumed. Thus, through better
              techniques, they <b>LEAVE NO</b> sticky <b>FOOTPRINTS</b> behind.
           </p>,
           <p>
              Many have thought that environmentally responsible products must
              be unattractive. It is our goal to make sure our products are even
              more <b>ATTRACTIVE</b> than the others.
           </p>,
           <p>
              Let’s face it, geckos are cute and lovable. Even if you don’t like
              lizards, you have to admit that geckos are the most{" "}
              <b>ATTRACTIVE</b> reptiles out there.
           </p>,
        ]
   return (
      <section className="flex gap-x-3 ml-3">
         <div
            className={`text-sm flex flex-col gap-y-4 ${
               mobileWidth ? "w-full" : "w-2/3"
            }`}
         >
            <span className={`${mobileWidth ? "text-center" : ""}`}>
               <p>
                  You may be wondering why a gecko would be used as a symbol for
                  ecologically friendly products.
               </p>
               <br />
               <p>
                  Compare the similarities below and see why we feel that the
                  gecko represents our goals and mission perfectly…
               </p>
            </span>

            <div
               className={`grid grid-cols-2 grid-rows-5 gap-4 w-full ${
                  mobileWidth ? "mt-[-50px]" : ""
               }`}
            >
               <div className="flex items-center justify-center relative">
                  <img
                     src={logo}
                     alt="Logo"
                     className={`transform ${
                        mobileWidth ? "scale-50" : "scale-75"
                     } absolute ${
                        mobileWidth ? "left-[-10px] top-10" : "left-12"
                     }`}
                  />
                  <h1
                     className={`${
                        mobileWidth
                           ? "text-base absolute top-20 right-8"
                           : "text-2xl"
                     } font-semibold text-green-main`}
                  >
                     us
                  </h1>
               </div>

               <div
                  className={`flex items-center justify-center relative ${
                     mobileWidth ? "transform scale-50" : "h-20 w-20"
                  }`}
               >
                  <img
                     src={gecko}
                     alt="Gecko"
                     className={`absolute ${
                        mobileWidth ? "top-14 right-5" : "left-14 bottom-12"
                     } transform rotate-[-18deg]`}
                  />
                  <h1
                     className={`${
                        mobileWidth ? "text-3xl" : "text-2xl"
                     } font-semibold text-green-light ${
                        mobileWidth ? "absolute top-24 left-14" : ""
                     }`}
                  >
                     {mobileWidth ? "gecko" : "the gecko"}
                  </h1>
               </div>
               {items.map((item, index) => (
                  <div
                     key={uuidv4()}
                     className={`p-3 max-h-32 overflow-clip ${
                        index % 2 === 0
                           ? "bg-green-main text-white"
                           : "bg-green-light text-graphite"
                     }  rounded-lg leading-3 text-xxs font-semibold ${
                        mobileWidth ? "text-xs" : "text-sm"
                     }`}
                  >
                     {item}
                  </div>
               ))}
            </div>
         </div>

         {mobileWidth ? null : (
            <>
               <div className="border-l-2 border-l-gray h-auto border-opacity-100"></div>

               <div className="flex flex-col text-xxs">
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
   )
}
