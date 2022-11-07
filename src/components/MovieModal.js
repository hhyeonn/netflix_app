import React, { useRef } from 'react';
import "../styles/MovieModal.css";
import useOnClickOutside from '../hooks/useOnClickOutside';

function MovieModal({backdrop_path, title, overview, name, release_date,
first_air_date,vote_average, setModalOpen}) {
    const ref = useRef(); // Id 지정하는 hook함수: useRef

    useOnClickOutside(ref, () => {
        setModalOpen(false); //Modal창을 닫게 하는 함수
    });

  return (
    <div className='presentation'>
        <div className='wrapper-modal'>
            <div className='modal' ref={ref}>
                <span className='modal-close' onClick={() => setModalOpen(false)}>X</span>
                <img className='modal__poster-img' alt={title ? title : name} 
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
                <div className='modal__content'>
                    <p className='modal__details'>
                        <span className='modal__user_perc'>100% for you</span> {" "}
                        {release_date ? release_date : first_air_date}{/* 개봉일이 없으면 첫방송일 넣어라 */}
                    </p>
                    <h2 className='modal__title'>{title ? title : name}</h2>{/* title이 있으면 넣고 없으면 name으로 넣어라 */}
                    <p className='modal__details'> 평점: {vote_average}</p>
                    <p className='modal__overview'>{overview}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieModal