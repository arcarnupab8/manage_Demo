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
            name={item.name} 
            id={item.id} 
            imgsrc={'product.png'} 
            price={item.price} 
            unit={item.unit} 
            quantity={item.quantity} 
            status={item.status}
            own={item.own}
          />
        ))}
      </div>
    </div>
  )
}

export default Stock