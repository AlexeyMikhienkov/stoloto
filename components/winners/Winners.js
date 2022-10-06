import {useRef} from "react";
import Carousel from "../carousel/Carousel";
import Winner from "./Winner";
import {safeHTML} from "../../utils/safeHTML";

export default function Winners({title, winners, moreStoriesText, logos, navText}) {
  const prevRef = useRef();
  const nextRef = useRef();

  function logosData(logos) {
    return Object.entries(logos).map(([key, src]) => (
      <img key={key} className={"winners__more-stories-logo"} alt={key} src={src}/>
    ))
  }

  //TODO: порезать картинки без тени и добавить тень через css
  return (
    <section className={"winners app__winners"}>
      <h2 className={"winners__title"}>{title}</h2>
      <Carousel
        settings={{
          slidesPerView: 3,
          spaceBetween: 82
        }}
        itemsData={winners}
        item={Winner}
        prevRefNavigation={prevRef}
        nextRefNavigation={nextRef}
      />
      <div className={"winners__nav-block"}>
        <button className={"winners__nav winners__nav_prev winners__nav_disabled"} ref={prevRef}/>
        <p className={"winners__nav-text"}>{navText}</p>
        <button className={"winners__nav winners__nav_next"} ref={nextRef}/>
      </div>
      <div className={"winners__more-stories"}>
        <p className={"winners__more-stories-text"}>{safeHTML(moreStoriesText)}</p>
        <div className={"winners__more-stories-logos"}>
          {logosData(logos)}
        </div>
      </div>
    </section>
  )
}