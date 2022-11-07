import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  const [show, setShow] = useState(false); /* 스크롤 내리면 background 검은색 */
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
        // console.log("window.scrolly", window.scrollY);
        //scroll event 적용
        if(window.scrollY > 50) {
            setShow(true);
        }else{
            setShow(false);
        }
    });
    //component를 사용되지 않을 경우 기존 scroll event 삭제해줌
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  },[]);

  const onChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <nav className={`nav ${show && "nav__black"}`}>
        <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png'
            alt='Netflix logo'
            className='nav__logo'
            onClick={() => (window.location.href = "/netflix_app/")} /* window reload: 로고를 클릭하면 새로고침 됨_한줄이면 {} 생략 */
         />
         <input type="search" value={searchValue} onChange={onChange} placeholder="영화를 검색해주세요." className='nav__input' />
        <img 
            src='https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
            alt='User logged'
            className='nav__avatar'
         />

    </nav>
  )
}

export default Nav