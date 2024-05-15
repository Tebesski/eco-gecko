import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from "./pages/NotFound.tsx"
import Home from "./pages/Home/Home.tsx"
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre.tsx"
import HowToCompost from "./pages/HowToCompost/HowToCompost.tsx"
import Faq from "./pages/Faq/Faq.tsx"
import WhereToBuy from "./pages/WhereToBuy/WhereToBuy.tsx"
import ContactUs from "./pages/ContactUs/ContactUs.tsx"
import Kitchenware from "./pages/KitchenwarePages/Kitchenware.tsx"
import Plates from "./pages/KitchenwarePages/Plates/Plates.tsx"
import Bowls from "./pages/KitchenwarePages/Bowls/Bowls.tsx"
import Forks from "./pages/KitchenwarePages/Forks/Forks.tsx"
import Knives from "./pages/KitchenwarePages/Knives/Knives.tsx"
import Spoons from "./pages/KitchenwarePages/Spoons/Spoons.tsx"
import Customization from "./pages/Customization/Customization.tsx"

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
         {
            path: "home",
            element: <Home />,
         },
         {
            path: "about",
            element: <WhoWeAre />,
         },
         {
            path: "compost",
            element: <HowToCompost />,
         },
         {
            path: "faq",
            element: <Faq />,
         },
         {
            path: "where-to-buy",
            element: <WhereToBuy />,
         },
         {
            path: "contact-us",
            element: <ContactUs />,
         },
         {
            path: "customization",
            element: <Customization />,
         },
         {
            path: "kitchenware",
            element: <Kitchenware />,
            children: [
               {
                  path: "plates",
                  element: <Plates />,
               },
               {
                  path: "bowls",
                  element: <Bowls />,
               },
               {
                  path: "forks",
                  element: <Forks />,
               },
               {
                  path: "knives",
                  element: <Knives />,
               },
               {
                  path: "spoons",
                  element: <Spoons />,
               },
            ],
         },
      ],
   },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
   <RouterProvider router={router} />
)
