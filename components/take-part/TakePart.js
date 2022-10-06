import {useRef} from "react";
import Carousel from "../carousel/Carousel";
import ActionOrder from "./ActionOrder";
import Button from "../button/Button";

export default function TakePart({title, actionsOrder, buttonText, navText}) {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <section className={"take-part app__take-part"}>
      <h2 className={"take-part__title"}>{title}</h2>
      <Carousel
        settings={{
          spaceBetween: 28
        }}
        itemsData={actionsOrder}
        item={ActionOrder}
        prevRefNavigation={prevRef}
        nextRefNavigation={nextRef}
      />
      <div className={"take-part__nav-block"}>
        <button className={"take-part__nav take-part__nav_prev take-part__nav_disabled"} ref={prevRef}/>
        <p className={"take-part__nav-text"}>{navText}</p>
        <button className={"take-part__nav take-part__nav_next"} ref={nextRef}/>
      </div>
      <Button className={"take-part__button"}>{buttonText}</Button>
    </section>
  )
}