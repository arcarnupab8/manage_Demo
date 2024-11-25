import React from 'react';

import style from './css/stock.module.css';
import { Products } from '../../Typeof/DataProduct';
import ProductCard from '../../components/organisms/ProductCard';

const Stock: React.FC = () => {

  const handleCardClick = (id: string) => {
    console.log(id);
  }

  return (
    <div className={style.container}>
      <div className={style["ProductCard-Wrap"]}>
        {Products.map((item, index) => (
          <ProductCard
            key={index} 
            value={item}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Stock