import {safeHTML} from "../../utils/safeHTML";

export default function ActionOrder({device, title, text, iconSrc, iconSrcMobile, index}) {
  return (
    <div
      className={`take-part__action-order take-part__action-order_${index + 1} ${!index ? "take-part__action-order_active" : ""}`}>
      <div className={"take-part__action-order-step-wrapper"}>
        <p className={"take-part__action-order-step"}>{index + 1}</p>
      </div>
      <div className={"take-part__action-order-line"}/>
      <p className={"take-part__action-order-title"}>{safeHTML(title)}</p>
      <p className={"take-part__action-order-text"}>{safeHTML(text)}</p>
      <img src={device === "mobile" ? (iconSrcMobile ?? iconSrc) : iconSrc}
           alt={title}
           className={`take-part__action-order-icon take-part__action-order-icon_${index + 1}`}/>
    </div>
  )
}