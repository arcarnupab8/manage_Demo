export interface Product{
    id: string;
    name: string;
    price: GLfloat;
    quantity: number;
    unit: string;
    status: boolean;
    own: boolean;
    img: string;
}

export const Products: Product[] = [
    {
        id: '00001a',
        name: 'ProductA',
        price: 100.0,
        quantity: 9999,
        unit: 'แพ็ค',
        status: true,
        own: true,
        img: '/productImg/product.png',
    },
    {
        id: '00001a',
        name: 'ProductA',
        price: 100.0,
        quantity: 9999,
        unit: 'แพ็ค',
        status: true,
        own: false,
        img: '/productImg/product.png',
    },
    {
        id: '00001a',
        name: 'ProductA',
        price: 100.0,
        quantity: 9999,
        unit: 'แพ็ค',
        status: false,
        own: true,
        img: '/productImg/product.png',
    },
    {
        id: '00001a',
        name: 'ProductA',
        price: 100.0,
        quantity: 9999,
        unit: 'แพ็ค',
        status: true,
        own: false,
        img: '/productImg/product.png',
    },
    {
        id: '00001a',
        name: 'ProductA',
        price: 100.0,
        quantity: 9999,
        unit: 'แพ็ค',
        status: true,
        own: true,
        img: '/productImg/product.png',
    },
    {
        id: '00001a',
        name: 'ProductA',
        price: 100.0,
        quantity: 9999,
        unit: 'แพ็ค',
        status: false,
        own: true,
        img: '/productImg/product.png',
    },
]