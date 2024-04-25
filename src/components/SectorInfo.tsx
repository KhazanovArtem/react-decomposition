interface ISectroInfo {
    weather: Iweather,
    visit: IVisit,
    country: Icountry,
    tv: ITelevision,
    broadcast: IBroadCast 
}

interface Iweather {
    title: string,
    img: string,
    morning: string,
    evening: string
}

interface IVisit {
    title: string,
    data: IVisitItem[]
}

interface IVisitItem {
    text: string
}

interface Icountry {
    title: string,
    text: string
}

interface ITelevision {
    title: string,
    data: ITelevisionItem[]
}

interface ITelevisionItem {
    time: string,
    name: string,
    channel: string,
}

interface IBroadCast {
    title: string,
    data: IBroadCastItem[]
}

interface IBroadCastItem {
    name: string,
    channel: string,
}

export const SectorInfo: React.FC<ISectroInfo> = (props) => {
  return (
    <div className='sector-info'>
        <BlockWeather 
            title={props.weather.title} 
            img={props.weather.img} 
            morning={props.weather.morning} 
            evening={props.weather.evening}/>
        <LastVisit 
            title={props.visit.title} 
            data={props.visit.data}/>
        <Country 
            title={props.country.title} 
            text={props.country.text}/>
        <Television 
            title={props.tv.title} 
            data={props.tv.data}/>
        <BroadCast 
            title={props.broadcast.title} 
            data={props.broadcast.data}/>
    </div>
  )
}

const BlockWeather: React.FC<Iweather> = (props) => {
    return(
    <div className="block block-weather">
        <h2>{props.title}</h2>
        <div>
            <img src={props.img} alt="..."></img>
            <div>
                <span>{props.morning}</span>
                <span>{props.evening}</span>
            </div>
        </div>
    </div>
    )
}

const LastVisit: React.FC<IVisit> = (props) => {
    return(
        <div className="block block-visit">
        <h2>{props.title}</h2>
        <div>
            {props.data.map(item => <span>{item.text}</span>)}
        </div>
    </div>
    )
}

const Country: React.FC<Icountry> = (props) => {
    return(
        <div className="block block-country">
            <h2>{props.title}</h2>
            <div>
                {props.text}
            </div>
        </div>
    )
}

const Television: React.FC<ITelevision> = (props) => {
    return(
        <div className="block block-television">
            <h2>{props.title}</h2>
            {props.data.map(item => 
                <div className="news-item">
                    <span>{item.time}</span>
                    <span>{item.name}</span>
                    <span>{item.channel}</span>
                </div>
            )}
        </div>
    )
}

const BroadCast: React.FC<IBroadCast> = (props) => {
    return(
        <div className="block block-broadcast">
            <h2>{props.title}</h2>
            {props.data.map(item => 
                <div>
                    <button></button>
                    <span>{item.name}</span>
                    <span>{item.channel}</span>
                </div>
            )}
        </div>
    )
}
