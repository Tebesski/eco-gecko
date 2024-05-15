import HeaderLogo from "./HeaderLogo"
import KitchenwareMenu from "./KitchenwareMenu"

export default function Header() {
   return (
      <header className="flex flex-col gap-y-6">
         <HeaderLogo />
         <KitchenwareMenu />
      </header>
   )
}
