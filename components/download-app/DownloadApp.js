import {safeHTML} from "../../utils/safeHTML";
import Button from "../button/Button";

export default function DownloadApp({title, advantages, download, phones, increaseChance}) {

  function items(advantages) {
    return advantages.map(({text, iconSrc}, index) => {
      console.log(iconSrc)
      return (
        <div key={index} className={"download-app__advantage-block"}>
          <img src={iconSrc} className={`download-app__advantage-icon download-app__advantage-icon_${index + 1}`}/>
          <p className={"download-app__advantage-text"}>{safeHTML(text)}</p>
        </div>
      )
    })
  }

  function downloadItems(icons) {
    console.log(icons)
    return icons.map(({type, iconSrc}) => {
      return (
          <img src={iconSrc} key={type} alt={`${download.text}: ${type}`}
               className={"download-app__icon"}/>
      )
    })
  }

  function phonesItems(items) {
    return items.map(({src, type}) => (
      <img src={src} key={src} className={`download-app__mobile download-app__mobile_${type}`}/>
    ))
  }

  return (
    <section className={"download-app app__download-app"}>
      <p className={"download-app__title"}>{safeHTML(title)}</p>
      <div className={"download-app__advantages"}>
        {items(advantages)}
      </div>
      <Button className={"button_content download-app__content-button"}>
        <p className={"download-app__text"}>{download.text}</p>
        <div className={"download-app__icons"}>
          {downloadItems(download.icons)}
        </div>
      </Button>
      {phonesItems(phones)}
      <Button className={"download-app__button"}>{increaseChance}</Button>
    </section>
  )
}