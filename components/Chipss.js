import Styles from '@/styles/Chipss.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Chipss = () => {
    const [products, setproducts] = useState("")
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        ch()
    }, []);

    async function ch() {
        await axios.get("/api/home").then((res) => {
            setproducts(res.data);
        });
    }

    const handleAddToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const handleRemoveFromCart = (id) => {
        const updatedCartItems = cartItems.filter(item => item !== id);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    return (
        <div>
            <div className={Styles.cards}>
                <div className={Styles.felx}>
                    <div className={Styles.name}>Chipssssss</div>
                    <div className={Styles.filter}>
                        <button className={`${Styles.filbtn} ${Styles.shadow}`}>All</button>
                        <button className={`${Styles.filbtn}`} >Salt</button>
                        <button className={`${Styles.filbtn}`} >Peeper</button>
                        <button className={`${Styles.filbtn}`} >S & P</button>
                    </div>
                </div>
                <div className={Styles.grid}>
                    {products && products.map((product) => (
                        <div className={Styles.card} key={product._id}>
                            <div className={Styles.chipname}>{product.Productname}</div>
                            <img src={product.imageurl} className={Styles.cardimg} alt={product.Productname} />
                            {!cartItems.includes(product._id) ? (<button className={Styles.addbtn} onClick={() => handleAddToCart(product._id)}>Add to cart</button>) : <button className={Styles.addbtn} onClick={() => handleRemoveFromCart(product._id)}>Remove from Cart</button>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Chipss