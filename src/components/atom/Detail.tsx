import React from 'react'

import style from './css/detail.module.css';

interface DetailProps{
    title: string;
    result: string|null;
    resultNumber: number|null;
    selected: boolean;
}

const Detail: React.FC<DetailProps> = ({ title, result, resultNumber, selected }) => {
  return (
    <div className={style.content}>
        <strong className={selected ? style.selected : ''}>{title}:</strong>
        {result !== null &&(
            <p className={selected ? style.selected : ''}>{result}</p>
        )}
        {resultNumber !== null &&(
            <p className={selected ? style.selected : ''}>{resultNumber}</p>
        )}
    </div>
  )
}

export default Detail