import { News } from './components/News'
import { NavigateMenu } from './components/NavigateMenu'
import { Search } from './components/Search'
import './App.css'
import { SectorInfo } from './components/SectorInfo'

function App() {

  const newsItems = [
    {key: 454, img: 'https://link.com', title: 'новость 1'},
    {key: 4545, img: 'https://link.com', title: 'новость 2'},
    {key: 454458, img: 'https://link.com', title: 'новость 3'},
  ]

  const weather = {
    title:'Погода', 
    img: 'https://link.com',
    morning: '+17', 
    evening: '+20'
  }

  const visit = {
    title: 'Netology.ru',
    data: [
      {text: 'Netology.ru'},
      {text: 'Маркет'},
      {text: 'Авто.ру'}
    ]
  }

  const country = {
    title: 'Карта Германии',
    text: 'Расписания'
  }

  const tv = {
    title: 'Телепрограмма',
    data: [
      {time: '14:50', name: 'Урок классической музыки', channel: 'Культура'},
      {time: '15:00', name: 'Очумелые ручки', channel: 'Первый канал'},
      {time: '16:30', name: 'Disney', channel: 'СТС'},
    ]
  }

  const broadcast = {
    title: 'Эфир',
    data: [
      {name: 'Управление как искусство' ,channel: 'Успех'},
      {name: 'Ночь. Мир в это время' ,channel: 'earthTV'},
      {name: 'Андрей Возник' ,channel: 'Совершенно секретно'},
    ]
  }

  return (
    <>
      <div className='container'>
        <News items={newsItems}></News>
        <NavigateMenu></NavigateMenu>
        <Search img={'https://link.com'}></Search>
        <SectorInfo 
          weather={weather}
          visit={visit}
          country={country}
          tv={tv}
          broadcast={broadcast}
          ></SectorInfo>
      </div>
    </>
  )
}

export default App
