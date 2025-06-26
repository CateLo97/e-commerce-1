import p1_img from '../Assets/p1.jpg';
import p2_img from '../Assets/p2.jpg';
import p3_img from '../Assets/p3.jpg';
import p4_img from '../Assets/p4.jpg';

let all_products = [
    {
        id: 1,
        name: "Product 1",
        category: "kid",
        img: p1_img,
        title: "Product 1",
        new_price: 10.00,
        old_price: 15.00,
    },
    {
        id: 2,
        name: "Product 2",
        img: p2_img,
        title: "Product 2",
        new_price: 20.00,
        old_price: 25.00,
        description: "Description for Product 2",
    },
    {
        id: 3,
        name: "Product 3",
        category: "kid",
        img: p3_img,
        title: "Product 3",
        new_price:30.00,
        old_price: 35.00,
    },
    {
        id: 4,
        name: "Product 4",
        category: "kid",
        img: p4_img,
        title: "Product 4",
        new_price: 40.00,
        old_price: 45.00,
    },
];

export default all_products;