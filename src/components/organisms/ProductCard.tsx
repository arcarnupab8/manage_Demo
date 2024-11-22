import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import ProductDetail from '../molecules/ProductDetail';
import DeleteIcon from '../atom/icon/deleteIcon';
import EditIcon from '../atom/icon/editIcon';
import DeleteHandleIcon from '../atom/icon/deleteHandleIcon';
import EditHandleIcon from '../atom/icon/editHandleIcon';

import style from './css/productCard.module.css';

interface ProductDetailProps {
    name: string;
    id: string;
    imgsrc: string;
    price: GLfloat;
    unit: string;
    quantity: number;
    status: boolean;
    own: boolean
}

const ProductCard: React.FC<ProductDetailProps> = ({ name, id, imgsrc, price, unit, quantity, status, own  }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked((prev) => !prev);
    };

  return (
    <Card 
        sx={{ 
            minWidth: 275,
            bgcolor: isClicked ? '#0078D4' : '#E0EFFF',
            margin: "1rem 0",
        }}
    >
        <CardActionArea onClick={handleCardClick}>
            <CardContent>
                <CardHeader
                    avatar={
                        own ? (
                            <Avatar sx={{ bgcolor: "grey" }} aria-label="recipe">
                                My
                            </Avatar>
                        ): null
                    }
                    titleTypographyProps={{
                        sx: {
                            color: isClicked ? '#fff' : '#000',
                        },
                      }}
                      subheaderTypographyProps={{
                        sx: {
                            color: isClicked ? '#fff' : '#000',
                        },
                      }}
                    title={`${name}`}
                    subheader={`${id}`}
                />
                <ProductDetail 
                    imgsrc={imgsrc} 
                    price={price} 
                    unit={unit} 
                    quantity={quantity} 
                    status={status}
                    isClicked={isClicked}
                />
            
            </CardContent>

            <div className={isClicked ? style.dividerClick : style.divider}/>
            <footer className={style.footer}>
                {isClicked ? (
                    <div className={style["footer-wrap"]}>
                        <div>
                            <DeleteHandleIcon/>
                        </div>
                        
                        <div>
                            <EditHandleIcon/>
                        </div>
                        
                    </div>
                    
                ):(
                    <div className={style["footer-wrap"]}>
                        <div>
                            <DeleteIcon/>
                        </div>
                        
                        <div>
                            <EditIcon/>
                        </div>
                        
                    </div>
                )}
                
            </footer>
        </CardActionArea>
    </Card>
  )
}

export default ProductCard