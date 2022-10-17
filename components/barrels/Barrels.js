import {safeHTML} from "../../utils/safeHTML";
import Button from "../button/Button";
import {barrelsItems} from "../../constants/constants";
import React from "react";

export default function Barrels({device, title, buy}) {
  function items() {
    const items = [];

    for (let i = 0; i < barrelsItems[device]; i++)
      items.push(
        <div className={`barrels__item barrels__item_${i + 1}`}>
          <img className={`barrels__image`} src={!i ? "/images/barrel_last.png" : "/images/barrel-img.png"}/>
        </div>
      );
    return items;
  }

  function stars() {
    const stars = [];
    for (let i = 0; i < 6; i++) {
      stars.push(<img key={i} className={`barrels__star barrels__star_${i + 1}`} src={"/images/star.png"}/>)
    }
    return stars;
  }

  function leaves() {
    const leaves = [];
    for (let i = 0; i < 5; i++) {
      leaves.push(<img key={i} className={`barrels__leaf barrels__leaf_${i + 1}`}
                       src={`/images/leaf${i < 3 ? 3 : 2}.png`}/>)
    }
    return leaves;
  }

  return (
    <section className={"barrels app__barrels"}>
      <img src={device === "mobile" ? "/images/wave-mobile-bottom.png" : "/images/wave-bottom.png"}
           className={"barrels__bottom-bg"}/>
      <img src={device === "mobile" ? "/images/barrels_bg-mobile.png" : "/images/barrels_bg.png"}
           className={"barrels__bg"}/>
      {stars()}
      {leaves()}
      <h2 className={"barrels__title"}>{safeHTML(title)}</h2>
      <div className={"barrels__block"}>
        {items()}
      </div>
      <Button className={"barrels__button"}>{buy}</Button>
      <img src={"/images/wind.png"} className={"barrels__wind-bg"}/>
    </section>
  )
}
