import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/* 검색 영화관련 이미지와 정보 */
function DetailPage() {
  const [movie, setMovie] = useState({});
  
  let {movieId} = useParams();
  console.log('movieId', movieId);
  console.log('useParams()', useParams());

  const fetchData = async () => { //Id에 해당되는 영화를 가져와야 됨
    const request = await axios.get(`/movie/${movieId}`);
    console.log('request', request);
    setMovie(request.data);
  }

  useEffect(() => {
    fetchData();
  },[movieId]); //movieId값이 바뀔때마다 새로운 영화가 나와야 됨

  if (!movie) return <div>...loading</div>;
  return (
    <section>
      <img className='modal__poster-img'
           src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
           alt="poster"
      />
      {/* 더 추가할 수 있음_영화정보 */}
    </section>
  )
}

export default DetailPage