import {safeHTML} from "../../utils/safeHTML";

export default function Advantage({title, text, imageSrc, index}) {
  return (
    <div key={index}
         className={`about-lottery__advantages-item 
           about-lottery__advantages-item_${index + 1} 
           ${!index ? "about-lottery__advantages-item_active" : ""}`}
    >
      <p className={"about-lottery__advantages-item-title"}>{safeHTML(title)}</p>
      <p className={"about-lottery__advantages-item-text"}>{safeHTML(text)}</p>
      <img src={imageSrc} alt={title} className={`about-lottery__advantages-item-image`}/>
    </div>
  )
}