import React, {useRef, useState} from "react";
import Carousel from "../carousel/Carousel";
import ActionOrder from "./ActionOrder";
import Button from "../button/Button";

export default function TakePart({device, title, actionsOrder, buttonText, navText, buttonAlsoWant}) {
  const prevRef = useRef();
  const nextRef = useRef();

  const [activeIndex, setActiveIndex] = useState(0);

  function stars() {
    const stars = [];
    for (let i = 0; i < 6; i++) {
      stars.push(<img key={i} className={`take-part__star take-part__star_${i + 1}`} src={"/images/star.png"}/>)
    }
    return stars;
  }

  //TODO: размер слайда равен размеру контейнера - исправить
  return (
    <section className={"take-part app__take-part"}>
      {stars()}
      <img src={"/images/barrel_15.png"} className={"take-part__barrel take-part__barrel_15"}/>
      <img src={"/images/barrel_3.png"} className={"take-part__barrel take-part__barrel_3"}/>
      <img src={`/images/leaf1.png`} className={`take-part__leaf`}/>
      <h2 className={"take-part__title"}>{title}</h2>
      <div className={"take-part__carousel"}>
        <Carousel
          settings={{
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 16
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
            },
            onSlideChange: (swiper) => setActiveIndex(swiper.activeIndex)
          }}
          itemsData={actionsOrder}
          item={ActionOrder}
          device={device}
          prevRefNavigation={prevRef}
          nextRefNavigation={nextRef}
        />
      </div>
      <div className={"take-part__nav-block"}>
        <button className={`take-part__nav take-part__nav_prev ${activeIndex === 0 ? "take-part__nav_disabled" : ""}`}
                ref={prevRef}/>
        <p className={"take-part__nav-text"}>{navText}</p>
        <button
          className={`take-part__nav take-part__nav_next ${activeIndex + 3 === actionsOrder.length ? "take-part__nav_disabled" : ""}`}
          ref={nextRef}/>
      </div>
      <Button className={"take-part__button"}>{buttonText}</Button>
      <Button className={"take-part__button-also-want"}>{buttonAlsoWant}</Button>
    </section>
  )
}