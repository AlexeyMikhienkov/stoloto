export default function Button({className, children}) {
  return (
    <div className={"button__wrapper"}>
      <button className={`button ${className ?? ""}`}>{children}</button>
    </div>
  )
}