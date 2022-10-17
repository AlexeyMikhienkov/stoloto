import {safeHTML} from "../../utils/safeHTML";
import Button from "../button/Button";

export default function DownloadApp({
                                      device,
                                      title,
                                      advantages,
                                      download,
                                      phones,
                                      increaseChance,
                                      brands,
                                      buttonText,
                                      buttonAlsoWant
                                    }) {

  function items(advantages) {
    return advantages.map(({text, iconSrc, iconSrcMobile}, index) => {
      return (
        <div key={index} className={"download-app__advantage-block"}>
          <img src={device === "mobile" ? iconSrcMobile : iconSrc}
               className={`download-app__advantage-icon download-app__advantage-icon_${index + 1}`}/>
          <p className={"download-app__advantage-text"}>{safeHTML(text)}</p>
        </div>
      )
    })
  }

  function logosData(logos) {
    return Object.entries(logos).map(([key, {src, target, href}]) => {
      return (
        <a key={key} className={"download-app__icon"} target={target} href={href}>
          <img src={src}/>
        </a>
      )
    })
  }

  function brandsBlock(brands) {
    return Object.entries(brands).map(([key, {src, target, href}]) => {
      return (
        <a key={key} className={"download-app__brands-icon"} target={target} href={href}>
          <img src={src}/>
        </a>
      )
    })
  }

  function stars() {
    const stars = [];
    for (let i = 0; i < 3; i++) {
      stars.push(<img key={i} className={`download-app__star download-app__star_${i + 1}`} src={"/images/star.png"}/>)
    }
    return stars;
  }

  function phonesItems(items) {
    return items.map(({src, type}) => (
      <img src={src} key={src} className={`download-app__mobile download-app__mobile_${type}`}/>
    ))
  }

  return (
    <section className={"download-app app__download-app"}>
      {stars()}
      <img className={`download-app__leaf`} src={`/images/leaf2.png`}/>
      <img className={`download-app__barrel`} src={`/images/barrel-img.png`}/>
      <img className={`download-app__barrel-22`} src={`/images/barrel_22.png`}/>
      <h2 className={"download-app__title"}>{safeHTML(title)}</h2>
      <div className={"download-app__advantages"}>
        {items(advantages)}
      </div>
      <Button className={"button_content download-app__content-button"}>
        <p className={"download-app__text"}>{download.text}</p>
        <div className={"download-app__icons"}>
          {logosData(download.icons)}
        </div>
      </Button>
      {phonesItems(phones)}
      <div className={"download-app__brands-block"}>
        {brandsBlock(brands)}
      </div>
      <Button className={"download-app__button"}>{increaseChance}</Button>
      <Button className={"download-app__button-download"}>{buttonText}</Button>
      <Button className={"download-app__button-also-want"}>{buttonAlsoWant}</Button>
    </section>
  )
}