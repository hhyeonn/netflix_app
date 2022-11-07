import React, { useEffect, useState } from 'react'

export const useDebounce = (value, delay) => { //value:값(검색창에 입력된 문자)
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => { //검색창 입력이 500 시간이 안지났으면 return 실행
            setDebounceValue(value);
        }, delay);

        return () => { // setTimeout이 안될때 clearTimeout 실행해라
            clearTimeout(handler); // setTimeout을 지운다
        }

    },[value, delay]); // value, delay값이 바뀔때 마다

    return debounceValue;
}