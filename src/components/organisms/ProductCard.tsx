import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ProductDetail from '../molecules/ProductDetail';

import style from './css/productCard.module.css';
import { Product_t } from '../../Typeof/DataProduct';

interface ProductDetailProps {
    value: Product_t;
}

const ProductCard: React.FC<ProductDetailProps> = (Prop) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        
        alert(Prop.value.id);
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
            <CardContent 
                sx={{
                    padding: 0,
                }}
            >
                <CardHeader
                    avatar={
                        Prop.value.own ? (
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
                    title={`${Prop.value.name}`}
                    subheader={`${Prop.value.id}`}
                />

                <ProductDetail 
                    img={Prop.value.img} 
                    price={Prop.value.price} 
                    unit={Prop.value.unit} 
                    quantity={Prop.value.quantity} 
                    status={Prop.value.status}
                    isClicked={isClicked}
                />
                
            </CardContent>
        </CardActionArea>

        <Divider
            sx={{
                bgcolor: isClicked ? '#fff' : '#000',
            }}
        />
        <CardActions>
            <IconButton aria-label="delete">
                <EditIcon
                    sx={{
                        color: isClicked ? 'white' : 'black',
                    }}
                />
            </IconButton>
            <IconButton aria-label="delete">
                <DeleteIcon
                    sx={{
                        color: isClicked ? 'white' : 'black',
                    }}
                />
            </IconButton>                  
        </CardActions>
        
    </Card>
  )
}

export default ProductCard