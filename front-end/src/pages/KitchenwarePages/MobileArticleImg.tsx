type MobileArticleImgType = { img: string }

export default function MobileArticleImg({ img }: MobileArticleImgType) {
   return (
      <img src={img} alt="Header article image" className="ml-[-12px] mt-6" />
   )
}
