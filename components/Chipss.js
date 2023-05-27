import Styles from '@/styles/Chipss.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Chipss = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedButton, setSelectedButton] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/home');
            setProducts(response.data);
            const storedCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
            if (storedCartItems) {
                setCartItems(storedCartItems);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddToCart = (product) => {
        const updatedCartItems = [...cartItems, product];
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        console.log(sessionStorage.getItem('cartItems'));
    };

    const handleRemoveFromCart = (id) => {
        const updatedCartItems = cartItems.filter((item) => item !== id);
        sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
        console.log(sessionStorage.getItem('cartItems'));
    };

    const filterProductsByFlavor = (flavor) => {
        setSelectedFlavor(flavor);
        setSelectedButton(flavor);
    };

    const filteredProducts = selectedFlavor
        ? products.filter((product) => product.flavor === selectedFlavor)
        : products;

    return (
        <div >
            <div className={Styles.cards}>
                <div className={Styles.felx}>
                    <div className={Styles.name}>Chipssssss</div>
                    <div className={Styles.filter}>
                        <button
                            className={`${Styles.filbtn} ${selectedButton === '' ? Styles.shadow : ''}`}
                            onClick={() => filterProductsByFlavor('')}
                        >
                            All
                        </button>
                        <button
                            className={`${Styles.filbtn} ${selectedButton === 'Salt' ? Styles.shadow : ''}`}
                            onClick={() => filterProductsByFlavor('Salt')}
                        >
                            Salt
                        </button>
                        <button
                            className={`${Styles.filbtn} ${selectedButton === 'Peeper' ? Styles.shadow : ''}`}
                            onClick={() => filterProductsByFlavor('Peeper')}
                        >
                            Peeper
                        </button>
                        <button
                            className={`${Styles.filbtn} ${selectedButton === 'S&P' ? Styles.shadow : ''}`}
                            onClick={() => filterProductsByFlavor('S&P')}
                        >
                            S & P
                        </button>
                    </div>
                </div>
                <div className={Styles.grid}>
                    {filteredProducts.map((product) => (
                        <div className={Styles.card} key={product._id}>
                            <div className={Styles.chipname}>{product.Productname}</div>
                            <img
                                src={product.imageurl}
                                className={Styles.cardimg}
                                alt={product.Productname}
                            />
                            {!cartItems.includes(product._id) ? (
                                <button
                                    className={Styles.addbtn}
                                    onClick={() => handleAddToCart(product._id)}
                                >
                                    Add to cart
                                </button>
                            ) : (
                                <button
                                    className={Styles.addbtn}
                                    onClick={() => handleRemoveFromCart(product._id)}
                                >
                                    Remove from Cart
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chipss;

