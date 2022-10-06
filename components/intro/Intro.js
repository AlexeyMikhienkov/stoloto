import React from "react";
import LotteryCard from "../lottery-card/LotteryCard";
import {safeHTML} from "../../utils/safeHTML";
import Button from "../button/Button";

export default function Intro({title, prizeText, prizeValue, lotteries, broadcastInfo, buyTicket}) {

  function lotteryCards() {
    return lotteries.map((data, index) => (
      <React.Fragment key={index}>
        <LotteryCard {...data} index={index}/>
      </React.Fragment>
    ))
  }

  return (
    <section className={"intro app__intro"}>
      <div className={"intro__content"}>
        <img src={"/images/logo/russ-loto_alternative-logo.svg"} className={"intro__loto-logo"}/>
        <h2 className={"intro__title"}>{safeHTML(title)}</h2>
        <div className={"intro__prize"}>
          <div className={"intro__prize-info"}>
            <p className={"intro__prize-text"}>{prizeText}</p>
            <p className={"intro__prize-value"}>{prizeValue}</p>
          </div>
        </div>
        <div className={"intro__lotteries"}>
          {lotteryCards()}
        </div>
        <div className={"intro__info"}>
          <img src={"/images/logo/ntv-logo.svg"} className={"intro__channel-logo"}/>
          <p className={"intro__broadcast-info"}>{safeHTML(broadcastInfo)}</p>
        </div>
      </div>
      <Button className={"intro__ticket-button"}>{buyTicket}</Button>
    </section>
  )
}