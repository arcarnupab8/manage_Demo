import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

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
            width: 300,
            bgcolor: isClicked ? '#0078D4' : '#E0EFFF',
            margin: "1rem 1rem",
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
                    sx={{
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    titleTypographyProps={{
                        sx: {
                            color: isClicked ? '#fff' : '#000',
                            fontSize: '32px'
                        },
                    }}
                    subheaderTypographyProps={{
                        sx: {
                            color: isClicked ? '#fff' : '#000',
                            fontSize: '16px'
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
        </CardActionArea>

        <Divider/>
        <CardActions 
            sx={{
                bgcolor:'#E0EFFF',
            }}
        >
            <Button size="small" color="primary">
                <EditIcon/>   
            </Button>
            <Button size="small" color="primary">
                <DeleteIcon/>    
            </Button>                  
        </CardActions>
        
    </Card>
  )
}

export default ProductCard