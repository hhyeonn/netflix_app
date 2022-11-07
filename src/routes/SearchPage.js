import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/SearchPage.css';
import { useDebounce } from '../hooks/useDebounce';

function SearchPage() {
    const [searchResults, setSearchResults] = useState([]);
    // console.log('useLocation()', useLocation());

    const navigate = useNavigate(); 

    const useQuery = () => { // useQuery: 질문
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    const searchTerm = query.get("q"); // 검색창에 입력한 문자값
    const debouncedSearchTerm = useDebounce(searchTerm, 500); 
    //useDebounce: 키워드가 다 입력이 되고 나서(0.5의 시간동안) 영화 정보 검색해줌

    // console.log('searchTerm',searchTerm);

    useEffect(() => {
        if(debouncedSearchTerm){
            fetchSearchMovie(debouncedSearchTerm);
        }
    },[debouncedSearchTerm]); //[debouncedSearchTerm]값이 바뀔때마다 함수 호출

    const fetchSearchMovie = async (searchTerm) => {
        try {   //request 요청
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`);
            console.log('request', request);
            setSearchResults(request.data.results);

        } catch (error) {
            console.log("error", error);
        }
    }

    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            <section className='search-container'>
                {searchResults.map(movie => {
                    if(movie.backdrop_path !== null && movie.media_type !== "person"){
                        const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                        return (
                            <>
                            {/* <div>
                                <ul></ul>
                            </div> */}

                            <div className='movie' key={movie.id}>
                                <div onClick={() => navigate(`/${movie.id}`)} 
                                    className='movie__column-poster'>
                                    <img src={movieImageUrl} 
                                         alt={movie.title || movie.name || movie.original_name}
                                         className="movie__poster" />
                                         {/* 영화이름 date 정보 등.. 추가로 넣을 수 있음 */}
                                </div>
                            </div>
                            </>
                        )
                    }
                })}
            </section>
        ) : (
            <section className="no-results">
                <div className='no-results__text'>
                    <p>찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.</p>
                </div>
            </section>
        );
    }

    return renderSearchResults();
}

export default SearchPage