import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "../styles/Row.css";
import MovieModal from './MovieModal';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Row({isLargeRow, title, id, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
    },[fetchUrl]);

    /* 영화정보 가져오기 async await */
    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        // console.log(request);
        setMovies(request.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

  return (
    <section className='row' key={id}>
        <h2>{title}</h2>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true} //loop 기능을 가용할 것인지
            breakpoints={{
                1378: {
                    slidesPerView: 6, // 한번에 보이는 슬라이드 개수
                    slidesPerGroup: 6, // 몇개씩 슬라이드 할지
                },
                998: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                625: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                0: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
            }}
            navigation //arrow 버튼 사용 유무
            pagination={{ clickable: true }} // 페이지 버튼 보이게 할지
            >
            {/* <div className='slider'> */}
                {/* <div className='slider__arrow left'> //navogation 때문에 필요없어짐
                    <span className='arrow' onClick={() => {
                        document.getElementById(id).scrollLeft -= (window.innerWidth - 80);
                    }}>{"<"}</span>
                </div> */}
                <div id={id} className='row__posters'>
                    {movies.map(movie => (
                        <SwiperSlide>
                        <img key={movie.id} 
                             className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                             src={`https://image.tmdb.org/t/p/original/${isLargeRow? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.name || movie.title || movie.original_name} 
                                  onClick={() => handleClick(movie)} 
                        />
                        </SwiperSlide>
                    ))}
                </div>
                {/* <div className='slider__arrow right'>
                    <span className='arrow' onClick={() => {
                        document.getElementById(id).scrollLeft += (window.innerWidth - 80);
                    }}>{">"}</span>
                </div> */}
            {/* </div> */}
        </Swiper>
        {modalOpen && (
            <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
            /* movieSelected 안에 있는 객체 다 가져와서 ModalOpen에 전달 */
        )}
    </section>
  )
}

export default Row