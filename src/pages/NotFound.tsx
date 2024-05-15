import { ErrorResponse, useRouteError } from "react-router-dom"

export default function NotFound() {
   const error = useRouteError() as ErrorResponse
   console.error(error)

   return (
      <div className="flex flex-col">
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
            <i>{error.statusText}</i>
         </p>
      </div>
   )
}
