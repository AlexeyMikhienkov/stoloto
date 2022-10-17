import React, {useState, useRef} from "react";
import Carousel from "../carousel/Carousel";
import Winner from "./Winner";
import {safeHTML} from "../../utils/safeHTML";

export default function Winners({title, winners, moreStoriesText, logos, navText}) {
  const prevRef = useRef();
  const nextRef = useRef();

  const [activeIndex, setActiveIndex] = useState(0);

  function logosData(logos) {
    return Object.entries(logos).map(([key, {src, target, href}]) => {
      return (
        <a key={key} className={"winners__more-stories-logo"} target={target} href={href}>
          <img src={src}/>
        </a>
      )
    })
  }

  function circles() {
    const circles = [];
    for (let i = 0; i < 5; i++) {
      circles.push(<div key={i} className={`winners__circle winners__circle_${i + 1}`}/>)
    }
    return circles;
  }

  function stars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<img key={i} className={`winners__star winners__star_${i + 1}`} src={"/images/star.png"}/>)
    }
    return stars;
  }

  //TODO: определиться с цифрами внизу карусели
  // добавить комету

  return (
    <section className={"winners app__winners"}>
      <img src={"/images/bg_winners.png"} className={"winners__wave-img"}/>
      <img src={"/images/barrel_22.png"} className={"winners__barrel winners__barrel_22"}/>
      <img src={"/images/barrel_3.png"} className={"winners__barrel winners__barrel_3"}/>
      <img className={`winners__comet`} src={"/images/comet.png"}/>
      {circles()}
      {stars()}
      <img className={`winners__leaf`} src={`/images/leaf2.png`}/>
      <div className={"winners__content"}>
        <h2 className={"winners__title"}>{title}</h2>
        <div className={"winners__carousel"}>
          <Carousel
            settings={{
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 33
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 53,
                },
              },
              onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex)
            }}
            itemsData={winners}
            item={Winner}
            prevRefNavigation={prevRef}
            nextRefNavigation={nextRef}
          />
        </div>
        <div className={"winners__nav-block"}>
          <button className={`winners__nav winners__nav_prev ${activeIndex === 0 ? "winners__nav_disabled" : ""}`}
                  ref={prevRef}/>
          <p className={"winners__nav-text"}>{navText}</p>
          <button
            className={`winners__nav winners__nav_next ${activeIndex + 3 === winners.length ? "winners__nav_disabled" : ""}`}
            ref={nextRef}/>
        </div>
        <div className={"winners__more-stories"}>
          <p className={"winners__more-stories-text"}>{safeHTML(moreStoriesText)}</p>
          <div className={"winners__more-stories-logos"}>
            {logosData(logos)}
          </div>
        </div>
      </div>
    </section>
  )
}