interface News {
    items: NewsItemType[]
}

interface NewsItemType {
    key: number,
    img: string,
    title: string
} 

export const News: React.FC<News> = (props) => {
  return (
    <div className="header-container">
        <ul className="nav_news">
            <li className="nav_news__item"><a href="#">Сейчас в СМИ</a></li>
            <li className="nav_news__item"><a href="#">В Германии</a></li>
            <li className="nav_news__item"><a href="#">Рекомендуем</a></li>
        </ul>
        <span className="today_date"></span>
        <div className="stocks">
            <a href="#" className="stocks_item"></a>
            <a href="#" className="stocks_item"></a>
            <a href="#" className="stocks_item"></a>
        </div>
        {props.items.map(item => <NewsItem key={item.key} img={item.img} title={item.title}/>)}
    </div>
  )
}

export const NewsItem: React.FC<NewsItemType> = (props) => {
    return(
    <li key={props.key}>
        <img src={props.img} alt="Ошибка"/>
        <span>{props.title}</span>
    </li>
    )
}