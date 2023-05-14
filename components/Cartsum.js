import Styles from '@/styles/Cartsum.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession, signIn } from 'next-auth/react';


const Cartsum = () => {

    const [products, setProducts] = useState([]);
    const [contactno, setcontactno] = useState("");
    const [address, setaddress] = useState("");
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
    function handleInputChange(event) {
        let inputValue = event.target.value;
        inputValue = inputValue.replace(/\D/g, '');
        inputValue = inputValue.slice(0, 10);
        setcontactno(inputValue);
    }
    const calculateTotalAmount = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.Price;
        });
        return total;
    };

    async function handleButtonClick() {
        // if (!contactno && !address)
        //     return
        if (session) {
            const totalAmount = calculateTotalAmount();
            const { data } = await axios.post("/api/orders", { totalAmount })
            console.log(data)

            var options = {
                "key": process.env.KeyId,
                "amount": data.amount,
                "currency": "INR",
                "name": "My chip",
                "description": "My Chip",
                "image": "",
                "order_id": data.id,
                "callback_url": "http://localhost:3000/cart",
                "prefill": {
                    "name": `${session?.user?.name}`,
                    "email": `${session?.user?.email}`,
                    "contact": `${contactno}`
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                },
                "handler": function (response) {
                    var amount = data.amount
                    axios.put('/api/orders', { response, amount, contactno, address })
                        .then(function (res) {
                            console.log('Callback response:', res.data);
                        })
                        .catch(function (error) {
                            console.error('Callback error:', error);
                        });
                }
            };
            var razorpayObject = new window.Razorpay(options);
            razorpayObject.open();
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
                    <div><label>contact no</label> <input type="text" value={contactno} onChange={handleInputChange} placeholder='Contact no' /></div>
                    <div><label>Address</label> <input type="text" value={address} onChange={e => setaddress(e.target.value)} placeholder='Address' /></div>
                    <div><button className={Styles.btn} onClick={handleButtonClick}>Submit</button></div>
                </div>
            </div>
        </div>
    )
}

export default Cartsum