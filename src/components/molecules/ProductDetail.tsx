import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

import style from './css/productdetail.module.css'
import Detail from '../atom/Detail'

interface ProductDetailProps {
    img: string;
    price: GLfloat;
    unit: string;
    quantity: number;
    status: boolean;
    isClicked: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ img, price, unit, quantity, status, isClicked }) => {
  return (
    <CardContent
        sx={{
            padding: 0,
            '&:last-child': {
                padding: 0,
            }
        }}
    >
        
        <CardMedia
            component="img" 
            alt='Product image'
            image={`${img}`}
        />
                
        <div className={style.productInfo}>
            <div>
                <Detail title='ราคา' result={null} resultNumber={price} selected={isClicked ? true : false }/>
                <Detail title='หน่วย' result={unit} resultNumber={null} selected={isClicked ? true : false }/>
            </div>

            <div>
                <Detail title='จำนวน' result={null} resultNumber={quantity} selected={isClicked ? true : false }/>
                <Detail 
                    title='สถานะ' 
                    result={status === true ? "เปิดใช้งาน" : "ปิดใช้งาน"} 
                    resultNumber={null}
                    selected={isClicked ? true : false }
                />
            </div>
        </div>
                
    </CardContent>
  )
}

export default ProductDetail