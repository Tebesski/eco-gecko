import fsc from "../../assets/fsc.png"

type FSC = { topVal: string; leftVal: string; addStyles?: string }

export default function FSC({ addStyles, leftVal, topVal }: FSC) {
   return (
      <div className={`flex gap-x-4 absolute ${topVal} ${leftVal}`}>
         <div className="border-l-2 border-l-gray h-48" />

         <div>
            <div className={`flex flex-col text-xxs w-full ${addStyles}`}>
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
         </div>
      </div>
   )
}
