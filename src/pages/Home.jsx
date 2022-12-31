import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"
import {nanoid} from 'nanoid'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID={nanoid()} title='Upcoming' fetchURL={requests.requestUpcoming} />
        <Row rowID={nanoid()} title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID={nanoid()} title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID={nanoid()} title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID={nanoid()} title='Horror' fetchURL={requests.requestHorro} />
    </div>
  )
}

export default Home