import StolotoSVG from "./stoloto-logo.svg";

export default function Footer({text, organizerText, logos, ministryIcons, associations, lotteryText, annotations}) {

  function footerIcons(logos) {
    return Object.entries(logos).map(([key, iconSrc]) => (
      <img src={iconSrc} alt={key} className={"footer__icon"}/>
    ))
  }

  function ministries(icons) {
    return Object.values(icons).map(iconSrc => (
      <img src={iconSrc} className={"footer__ministry-icon"}/>
    ))
  }

  function associationsData(icons) {
    return Object.values(icons).map(iconSrc => (
      <img src={iconSrc} className={"footer__association-icon"}/>
    ))
  }

  function annotationsTexts(texts) {
    return Object.values(texts).map(text => (
      <p className={"footer__annotation-text"}>{text}</p>
    ))
  }

  return (
    <footer className={"footer app__footer"}>
      <div className={"footer__content footer__content_left"}>
        <div className={"footer__logo-wrapper"}>
          <StolotoSVG/>
        </div>
        <p className={"footer__text"}>{text}</p>
        <div className={"footer__icons"}>
          {footerIcons(logos)}
        </div>
      </div>
      <div className={"footer__content footer__content_right"}>
        <div className={"footer__ministry-wrapper"}>
          {ministries(ministryIcons)}
        </div>
        <p className={"footer__organizer-text"}>{organizerText}</p>
        <div className={"footer__associations-wrapper"}>
          {associationsData(associations)}
        </div>
        <p className={"footer__lottery-text"}>{lotteryText}</p>
        {annotationsTexts(annotations)}
      </div>
    </footer>
  )
}