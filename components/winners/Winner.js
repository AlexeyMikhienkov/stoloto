export default function Winner(data) {
  const {imageSrc, name, prize} = data

  return (
    <div className={"winners__winner"}>
      <img alt={"Изображение победителя"} className={"winners__winner-image"} src={imageSrc}/>
      <p className={"winners__winner-name"}>{name}</p>
      <p className={"winners__winner-prize"}>{prize}</p>
    </div>
  )
}