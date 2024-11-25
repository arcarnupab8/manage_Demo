import React from 'react';

import style from './css/stock.module.css';
import { Products } from '../../Typeof/DataProduct';
import ProductCard from '../../components/organisms/ProductCard';

const Stock: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style["ProductCard-Wrap"]}>
        {Products.map((item, index) => (
          <ProductCard
            key={index} 
            value={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Stock