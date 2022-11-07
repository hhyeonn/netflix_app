import React from 'react';
import requests from '../api/requests';
import Banner from '../components/Banner';
import Row from '../components/Row';

function MainPage() {
  return (
    <div>
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
    </div>
  )
}

export default MainPage