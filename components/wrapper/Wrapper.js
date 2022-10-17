import Header from "../header/Header";
import {aboutLottery, barrels, downloadApp, footer, header, intro, takePart, winners} from "../../constants/copyright";
import Intro from "../intro/Intro";
import Winners from "../winners/Winners";
import TakePart from "../take-part/TakePart";
import AboutLottery from "../about-lottery/AboutLottery";
import DownloadApp from "../download-app/DownloadApp";
import Barrels from "../barrels/Barrels";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import {browserData} from "../../utils/detector/detector";

//TODO: добавить переходы по клику на хэдере
// добавить версию для мобилки
// починить вторую карусель
// починить текст джекпот
export default function Wrapper() {
  const [device, setDevice] = useState(null);

  function backgrounds() {
    const bgs = [];
    for (let i = 0; i < 8; i++)
      bgs.push(<div className={`wrapper__bg wrapper__bg_${i + 1}`}/>)
    return bgs;
  }

  useEffect(() => {
    if (browserData.parsedResult.platform.type === "desktop")
      setDevice("desktop")
    else setDevice("mobile")
  }, []);

  return (
    <div className={"wrapper"}>
      {backgrounds()}
      <Header {...header}/>
      <Intro {...intro} device={device}/>
      <Winners {...winners}/>
      <TakePart {...takePart} device={device}/>
      <AboutLottery {...aboutLottery} device={device}/>
      <DownloadApp {...downloadApp} device={device}/>
      <Barrels {...barrels} device={device}/>
      <Footer {...footer} device={device}/>
    </div>
  )
}

//TODO: на ссылки докинуть href
// в мобилке добавить бургер

