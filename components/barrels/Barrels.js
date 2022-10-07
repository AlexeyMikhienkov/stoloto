import {safeHTML} from "../../utils/safeHTML";

export default function Barrels({title, buy}) {
  return (
    <section className={"barrels app__barrels"}>
      <p className={"barrels__title"}>{safeHTML(title)}</p>
      <div className={"barrels__block"}>
        <div className={"barrels__bg"}/>
        <div className={"barrels__items"}/>
      </div>
      <button className={"barrels__button"}>{buy}</button>
    </section>
  )
}
