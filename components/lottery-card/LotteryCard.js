import {safeHTML} from "../../utils/safeHTML";

export default function LotteryCard({edition, text, additionalText, broadcastDate, index}) {
  return (
    <div className={`intro__lottery-card lottery-card ${!index ? "lottery-card_active" : ""}`}>
      <div className={"lottery-card__edition-wrapper"}>
        <p className={"lottery-card__edition"}>{edition}</p>
        <p className={"lottery-card__edition-date"}>{safeHTML(broadcastDate)}</p>
      </div>
      <p className={"lottery-card__text"}>{safeHTML(text)}</p>
      {additionalText ? <p className={"lottery-card__add-text"}>{safeHTML(additionalText)}</p> : null}
      <p className={"lottery-card__date"}>{safeHTML(broadcastDate)}</p>
    </div>
  )
}