import Header from "../header/Header";
import {aboutLottery, barrels, downloadApp, header, intro, takePart, winners} from "../../constants/copyright";
import Intro from "../intro/Intro";
import Winners from "../winners/Winners";
import TakePart from "../take-part/TakePart";
import AboutLottery from "../about-lottery/AboutLottery";
import DownloadApp from "../download-app/DownloadApp";
import Barrels from "../barrels/Barrels";

export default function Wrapper() {
  return (
    <div className={"wrapper"}>
      <Header {...header}/>
      <Intro {...intro}/>
      <Winners {...winners}/>
      <TakePart {...takePart}/>
      <AboutLottery {...aboutLottery}/>
      <DownloadApp {...downloadApp}/>
      <Barrels {...barrels}/>
      {/*<Footer {...footer}/>*/}
    </div>
  )
}

