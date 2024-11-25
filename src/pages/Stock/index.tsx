import React, { useState } from 'react';

import style from './css/stock.module.css';
import { Products } from '../../Typeof/DataProduct';
import ProductCard from '../../components/organisms/ProductCard';

const Stock: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleCardClick = (id: string) => {
    setSelectedIds((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }

  const handleDeleteProduct = (id: string) => {
    alert(`Delete product on ID: ${id}`);
  }

  const handleEditProduct = (id: string) => {
    alert(`Edit product on ID: ${id}`);
  }

  console.log("Selected IDs:", selectedIds);
  return (
    <div className={style.container}>
      <div className={style["ProductCard-Wrap"]}>
        {Products.map((item, index) => (
          <ProductCard
            key={index} 
            value={item}
            isClicked={selectedIds.includes(item.id)}
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