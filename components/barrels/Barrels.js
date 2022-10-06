export default function Barrels({title, buy}) {

  return (
    <section className={"barrels app__barrels"}>
      <p className={"barrels__title"}>{title}</p>
      <button className={"barrels__button"}>{buy}</button>
    </section>
  )
}
