export default function DownloadApp({title, advantages, download, screens, increaseChance}) {

  function items(advantages) {
    return advantages.map(({text, iconSrc}) => (
      <div className={"download-app__advantage-block"}>
        <img src={iconSrc} className={"download-app__advantage-icon"}/>
        <p className={"download-app__advantage-text"}>{text}</p>
      </div>
    ))
  }

  function downloadItems(icons) {
    return Object.entries(icons).map(([key, iconSrc]) => (
      <div className={"download-app__block-icon-wrapper"}>
        <img src={iconSrc} alt={`${download.text}: ${key}`} className={"download-app__block-icon"}/>
      </div>
    ))
  }

  function screensItems({types, imageSrcPrefix}) {
    return types.map(type => (
      <img src={imageSrcPrefix + type} className={`download-app__mobile download-app__mobile_${type}`}/>
    ))
  }

  return (
    <section className={"download-app app__download-app"}>
      <p className={"download-app__title"}>{title}</p>
      {items(advantages)}
      <div className={"download-app__block"}>
        <p className={"download-app__block-text"}>{download.text}</p>
        {downloadItems(download.icons)}
      </div>
      {screensItems(screens)}
      <button className={"download-app__button"}>{increaseChance}</button>
    </section>
  )
}