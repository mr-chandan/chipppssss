import Styles from '@/styles/Cartsum.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession, signIn } from 'next-auth/react';


const Cartsum = () => {

    const [products, setProducts] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        ch()
    }, []);

    async function ch() {
        const storedCartItems = JSON.parse(window.sessionStorage.getItem('cartItems'));
        if (storedCartItems) {
            await axios.post("/api/home", { storedCartItems }).then((res) => {
                setProducts(res.data);
            });
        }
    }

    const calculateTotalAmount = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.Price;
        });
        return total;
    };

    async function handleButtonClick() {
        if (session) {
            const { data } = await axios.post("/api/orders")
            console.log(data)


            var options = {
                "key": process.env.KeyId,
                "amount": "50000",
                "currency": "INR",
                "name": "Jai Shree Ram",
                "description": "Test Transaction",
                "image": "",
                "order_id": data.id,
                "callback_url": "http://localhost:3000/cart",
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            var razorpayObject = new window.Razorpay(options);
            razorpayObject.open();
            razorpayObject.on('payment.success', function (response) {
                alert(response)
            })
        } else {
            signIn();
        }
    };


    return (
        <div className={Styles.hero}>
            <div className={Styles.name}>Cart</div>
            <div className={Styles.namesum}>Order Summery</div>



            {products.length === 0 ? (
                <div className={Styles.noitem}>Add items to cart
                    <img src='cart.png'></img>
                </div>
            ) : (

                products.map((product) => (
                    <div className={Styles.grid} key={product._id}>
                        <div className={Styles.card}>
                            <img src={product.imageurl} className={Styles.cardimg} />
                            <div className={Styles.chipsname}>
                                {product.Productname}
                            </div>
                        </div>
                        <div className={Styles.inc}>
                            <div className={Styles.boxnum}>
                                Quantity : 1
                            </div>
                        </div>
                        <div className={Styles.amt}>
                            <div>Price : {product.Price}rs</div>
                        </div>
                    </div>
                ))
            )}

            <div className={Styles.total}>

                <div className={Styles.tot}>
                    Total Amount
                </div>

                <div className={Styles.totrs}>
                    {calculateTotalAmount()}rs
                </div>
            </div>
            <div className={Styles.input}>

                <div className={Styles.inp}>
                    <div><label>First Name</label> <input type="text" /></div>
                    <div><label>Address</label> <input type="text" /></div>
                    <div><button className={Styles.btn} onClick={handleButtonClick}>Submit</button></div>
                </div>
            </div>
        </div>
    )
}

export default Cartsum