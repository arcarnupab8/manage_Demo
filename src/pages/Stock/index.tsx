import React, { useState } from 'react';

import style from './css/stock.module.css';
import { Products } from '../../Typeof/DataProduct';
import ProductCard from '../../components/organisms/ProductCard';

const Stock: React.FC = () => {

  const handleCardClick = (id: string) => {
    alert(`Selected product on ID: ${id}`);
    return id;
  }

  const handleDeleteProduct = (id: string) => {
    alert(`Delete product on ID: ${id}`);
  }

  const handleEditProduct = (id: string) => {
    alert(`Edit product on ID: ${id}`);
  }

  return (
    <div className={style.container}>
      <div className={style["ProductCard-Wrap"]}>
        {Products.map((item, index) => (
          <ProductCard
            key={index} 
            value={item}
            onCardClick={handleCardClick}
            onDelete={handleDeleteProduct}
            onEdit={handleEditProduct}
          />
        ))}
      </div>
    </div>
  )
}

export default Stock