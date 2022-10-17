import {safeHTML} from "../../utils/safeHTML";
import Carousel from "../carousel/Carousel";
import Advantage from "./Advantage";

export default function AboutLottery({device, title, advantages, watchVideo}) {

  function advantagesItems(advantages) {
    return advantages.map((data, index) => <Advantage {...data} index={index}/>)
  }

  return (
    <section className={"about-lottery app__about-lottery"}>
      <h2 className={"about-lottery__title"}>{safeHTML(title)}</h2>
      <a target={"_blank"} href={"https://www.youtube.com/"} className={"about-lottery__video-link"}>
        <p className={"about-lottery__video-text"}>{safeHTML(watchVideo)}</p>
        <img src={"/images/video-arrow.svg"} className={"about-lottery__video-link-image"}/>
      </a>
      {
        device === "mobile" ?
          <div className={"about-lottery__carousel"}>
            <Carousel
              settings={{
                slidesPerView: 1,
                spaceBetween: 14
              }}
              itemsData={advantages}
              item={Advantage}
            />
          </div> :
          <div className={"about-lottery__advantages-block"}>
            {advantagesItems(advantages)}
          </div>
      }
    </section>
  )
}