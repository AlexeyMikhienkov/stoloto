import {safeHTML} from "../../utils/safeHTML";

export default function ActionOrder({title, text, iconSrc, index}) {
  console.log(index);

  return (
    <div className={`take-part__action-order ${!index ? "take-part__action-order_active" : ""}`}>
      <div className={"take-part__action-order-step-wrapper"}>
        <p className={"take-part__action-order-step"}>{index + 1}</p>
      </div>
      <div className={"take-part__action-order-line"}/>
      <p className={"take-part__action-order-title"}>{safeHTML(title)}</p>
      <p className={"take-part__action-order-text"}>{safeHTML(text)}</p>
      {!index ? <img src={iconSrc} alt={title} className={"take-part__action-order-icon"}/> : null}
    </div>
  )
}