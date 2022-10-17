import React from "react";
import LotteryCard from "../lottery-card/LotteryCard";
import {safeHTML} from "../../utils/safeHTML";
import Button from "../button/Button";
import Carousel from "../carousel/Carousel";


export default function Intro({device, title, prizeText, prizeValue, lotteries, broadcastInfo, broadcastInfoMobile, buyTicket}) {
  function stars() {
    const stars = [];
    for (let i = 0; i < 7; i++) {
      stars.push(<img key={i} className={`intro__star intro__star_${i + 1}`} src={"/images/star.png"}/>)
    }
    return stars;
  }

  function leaves() {
    const leaves = [];
    for (let i = 0; i < 4; i++) {
      leaves.push(<img key={i} className={`intro__leaf intro__leaf_${i + 1}`}
                       src={`/images/leaf${i < 2 ? 1 : 2}.png`}/>)
    }
    return leaves;
  }

  return (
    <section className={"intro app__intro"}>
      <img src={device === "mobile" ? "/images/wave-mobile.png" : "/images/wave.png"} className={"intro__wave-img"}/>
      <img src={device === "mobile" ? "/images/home-mobile.png" : "/images/home.png"} className={"intro__home-img"}/>
      <img src={"/images/tree.png"} className={"intro__tree-img"}/>
      {stars()}
      <div className={"intro__comet-wrapper"}>
        <img className={`intro__comet`} src={"/images/comet.png"}/>
      </div>
      {leaves()}
      <div className={"intro__content"}>
        <img src={"/images/logo/russ-loto_alternative-logo.svg"} className={"intro__loto-logo"}/>
        <h2 className={"intro__title"}>{safeHTML(title)}</h2>
        <div className={"intro__prize"}>
          <p className={"intro__prize-text"}>{prizeText}</p>
          <p className={"intro__prize-value"}>{prizeValue}</p>
        </div>
        <div className={"intro__lotteries-carousel"}>
          <Carousel
            settings={{
              spaceBetween: 15,
              //   onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex)
            }}
            itemsData={lotteries}
            item={LotteryCard}
          />
        </div>
        <div className={"intro__info"}>
          <img src={"/images/logo/ntv-logo.svg"} className={"intro__channel-logo"}/>
          <p className={"intro__broadcast-info"}>{safeHTML(broadcastInfo)}</p>
          <p className={"intro__broadcast-info_mobile"}>{safeHTML(broadcastInfoMobile)}</p>
        </div>
      </div>
      <Button className={"intro__ticket-button"}>{buyTicket}</Button>
    </section>
  )
}