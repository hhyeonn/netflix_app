import { Outlet, Route, Routes } from 'react-router-dom';
import DetailPage from './routes/DetailPage';
import MainPage from './routes/MainPage';
import SearchPage from './routes/SearchPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './styles/App.css';

// import requests from './api/requests';
// import Banner from './components/Banner';
// import Footer from './components/Footer';
// import Nav from './components/Nav';
// import Row from './components/Row';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>
      {/* 중첩 Routes에 Outlet으로 설정하기 */}
      {/* <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Animation Movie" id="AM" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Action Movie" id="ACM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" id="CM" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" id="HM" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" id="RM" fetchUrl={requests.fetchRomanceMovies} />
      <Footer /> */}
    </div>
  );
}

export default App;
