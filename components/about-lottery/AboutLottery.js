import {safeHTML} from "../../utils/safeHTML";

export default function AboutLottery({title, advantages, watchVideo}) {

  function advantagesItems(advantages) {
    return advantages.map(({title, text, imageSrc}, index) => (
      <div key={index}
           className={`about-lottery__advantages-item 
           about-lottery__advantages-item_${index + 1} 
           ${!index ? "about-lottery__advantages-item_active" : ""}`}
      >
        <p className={"about-lottery__advantages-item-title"}>{safeHTML(title)}</p>
        <p className={"about-lottery__advantages-item-text"}>{safeHTML(text)}</p>
        <img src={imageSrc} alt={title} className={"about-lottery__advantages-item-image"}/>
      </div>
    ))
  }

  return (
    <section className={"about-lottery app__about-lottery"}>
      <h2 className={"about-lottery__title"}>{safeHTML(title)}</h2>
      <div className={"about-lottery__video-block"}>
        <p className={"about-lottery__video-text"}>{safeHTML(watchVideo)}</p>
        <button className={"about-lottery__video-button"}/>
      </div>
      <div className={"about-lottery__advantages-block"}>
        {advantagesItems(advantages)}
      </div>
    </section>
  )
}