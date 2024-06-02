import que from "../../assets/ico_q.png"
import ans from "../../assets/ico_a.png"
import { ReactNode } from "react"

const Question = ({
   question,
   labelClasses,
}: {
   question: string
   labelClasses?: string
}) => {
   return (
      <div className="flex items-center gap-x-1">
         <img src={que} alt="Question" width={47} height={29} />
         <h6 className={`text-green-main text-sm ${labelClasses}`}>
            {question}
         </h6>
      </div>
   )
}

const Answer = ({
   answer,
   withIco = true,
}: {
   answer: string | ReactNode
   withIco?: boolean
}) => {
   return (
      <div className="flex items-start gap-x-2">
         {withIco && (
            <img
               src={ans}
               alt="Answer"
               style={{ objectFit: "contain", width: "20px", height: "20px" }}
            />
         )}
         <div className="text-black text-sm">{answer}</div>
      </div>
   )
}

export const QA = ({
   question,
   answer,
   children,
   withIco = true,
   labelClasses,
   onClick,
}: {
   question: string
   answer?: string | ReactNode
   labelClasses?: string
   children?: ReactNode
   withIco?: boolean
   onClick?: (...args: any[]) => void
}) => {
   return (
      <div className="flex flex-col gap-y-2 ml-[-11px]" onClick={onClick}>
         <Question question={question} labelClasses={labelClasses} />
         <div className="bg-green-main bg-opacity-20 rounded-lg p-3 flex flex-col gap-y-2 ml-7">
            <Answer withIco={withIco} answer={answer} />
            <div className="ml-7 text-sm">{children}</div>
         </div>
      </div>
   )
}
