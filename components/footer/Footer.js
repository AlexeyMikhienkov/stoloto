import React from "react";

export default function Footer({device, text, organizerText, logos, logosMobile, ministryIcons, associations, lotteryText, annotations}) {

  function footerIcons(logos) {
    return Object.entries(logos).map(([key, {src, target, href}]) => {
      return (
        <a key={key} className={"footer__icon"} target={target} href={href}>
          <img src={src}/>
        </a>
      )
    })
  }

  function ministries(icons) {
    return Object.values(icons).map(iconSrc => (
      <img src={iconSrc} className={"footer__ministry-icon"}/>
    ))
  }

  function associationsData(icons) {
    return Object.values(icons).map((iconSrc, index) => (
      <div className={`footer__association-icon-wrapper footer__association-icon-wrapper_${index + 1}`}>
        <img src={iconSrc} className={`footer__association-icon`}/>
      </div>
    ))
  }

  function annotationsTexts(texts) {
    return Object.entries(texts).map(([org, text]) => (
      <p className={`footer__annotation-text footer__annotation-text_${org}`}>{text}</p>
    ))
  }

  return (
    <footer className={"footer app__footer"}>
      <div className={"footer__content footer__content_left footer__content_top"}>
        <img src={"/images/logo/stoloto-logo.svg"} className={"footer__stoloto-logo"}/>
        <p className={"footer__text"}>{text}</p>
        <div className={"footer__line"}/>
        <div className={"footer__icons"}>
          {footerIcons(device === "mobile" ? logosMobile : logos)}
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
      <div className={"footer__content footer__content_bottom"}>
        <div className={"footer__bottom-logos"}>
          <div className={"footer__ministry-wrapper"}>
            {ministries(ministryIcons)}
          </div>
          <div className={"footer__associations-wrapper"}>
            {associationsData(associations)}
          </div>
        </div>
        <div className={"footer__bottom-texts"}>
          <p className={"footer__organizer-text"}>{organizerText}</p>
          <p className={"footer__lottery-text"}>{lotteryText}</p>
          {annotationsTexts(annotations)}
        </div>
      </div>
    </footer>
  )
}