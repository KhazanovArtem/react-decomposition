interface SearchType {
    img: string
}

export const Search: React.FC<SearchType> = (props) => {
  return (
    <div>
        <img src={props.img} alt="Ошибка загрузки"/>
        <form>
            <input></input>
            <button></button>
        </form>
    </div>
  )
}
