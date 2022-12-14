import {header} from "../../constants/copyright";

export default function Header({items}) {

  function navItems() {
    return Object.values(items).map((title, index) => (
      <a key={index} className={"header__item"}>{title}</a>
    ))
  }

  //TODO: переделать через li и добавить навигацию
  return (
    <header className={"header app__header"}>
      <nav className={"header__nav"}>
        {navItems()}
      </nav>
    </header>
  )
}