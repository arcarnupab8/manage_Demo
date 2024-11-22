import React from 'react'

import style from './css/productdetail.module.css'
import Detail from '../atom/Detail'

interface ProductDetailProps {
    imgsrc: string;
    price: GLfloat;
    unit: string;
    quantity: number;
    status: boolean;
    isClicked: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ imgsrc, price, unit, quantity, status, isClicked }) => {
  return (
    <div className={style.content}>

        <img 
            alt='Product image'
            src={`/productImg/${imgsrc}`}
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
                
    </div>
  )
}

export default ProductDetail