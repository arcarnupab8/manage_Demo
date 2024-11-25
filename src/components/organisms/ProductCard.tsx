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
    onCardClick?: (id: string) => void;
    onDelete?: (id: string) => void;
    onEdit?: (id: string) => void;
}

const ProductCard: React.FC<ProductDetailProps> = (Prop) => {

  return (
    <Card 
        sx={{ 
            width: 300,
            bgcolor: Prop.value.status ? '#0078D4' : '#E0EFFF',
            margin: "1rem 1rem",
        }}
    >
        <CardActionArea onClick={() => Prop.onCardClick?.(Prop.value.id)}>
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
                            color: Prop.value.status ? '#fff' : '#000',
                            fontSize: '32px'
                        },
                    }}
                    subheaderTypographyProps={{
                        sx: {
                            color: Prop.value.status ? '#fff' : '#000',
                            fontSize: '16px'
                        },
                    }}
                    title={`${Prop.value.name}`}
                    subheader={`${Prop.value.id}`}
                />
                
                <Divider
                    sx={{
                        bgcolor: Prop.value.status ? '#fff' : '#000',
                    }}
                />
                <ProductDetail 
                    img={Prop.value.img} 
                    price={Prop.value.price} 
                    unit={Prop.value.unit} 
                    quantity={Prop.value.quantity} 
                    status={Prop.value.status}
                />
                
            </CardContent>
        </CardActionArea>

        <Divider
            sx={{
                bgcolor: Prop.value.status ? '#fff' : '#000',
            }}
        />
        <CardActions>
            <IconButton 
                aria-label="edit"
                onClick={() => Prop.onEdit?.(Prop.value.id)}
            >
                <EditIcon
                    sx={{
                        color: Prop.value.status ? 'white' : 'black',
                    }}
                />
            </IconButton>
            <IconButton 
                aria-label="delete"
                onClick={() => Prop.onDelete?.(Prop.value.id)}
            >
                <DeleteIcon
                    sx={{
                        color: Prop.value.status ? 'white' : 'black',
                    }}
                />
            </IconButton>                  
        </CardActions>
        
    </Card>
  )
}

export default ProductCard