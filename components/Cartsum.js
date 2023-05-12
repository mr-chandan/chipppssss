import Styles from '@/styles/Cartsum.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Cartsum = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ch()
    }, []);

    async function ch() {
        const storedCartItems = JSON.parse(window.sessionStorage.getItem('cartItems'));
        if (storedCartItems) {
            console.log(storedCartItems)
        }
        await axios.post("/api/home").then((res) => {
            setProducts(res.data);
        });
    }


    return (
        <div className={Styles.hero}>
            <div className={Styles.name}>Cart</div>
            <div className={Styles.namesum}>Order Summery</div>



            <div className={Styles.grid}>
                <div className={Styles.card}>
                    <img src='packetchips.png' className={Styles.cardimg} />
                    <div className={Styles.chipsname}>
                        Chaps
                    </div>
                </div>
                <div className={Styles.inc}>
                    <div className={Styles.plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className={Styles.boxnum}>
                        30
                    </div>
                    <div className={Styles.plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </div>
                </div>
                <div className={Styles.amt}>
                    <div>100rs</div>
                </div>
            </div>
            <div className={Styles.grid}>
                <div className={Styles.card}>
                    <img src='packetchips.png' className={Styles.cardimg} />
                    <div className={Styles.chipsname}>
                        Chaps
                    </div>
                </div>
                <div className={Styles.inc}>
                    <div className={Styles.plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className={Styles.boxnum}>
                        30
                    </div>
                    <div className={Styles.plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </div>
                </div>
                <div className={Styles.amt}>
                    <div>100rs</div>
                </div>
            </div>
            <div className={Styles.grid}>
                <div className={Styles.card}>
                    <img src='packetchips.png' className={Styles.cardimg} />
                    <div className={Styles.chipsname}>
                        Chaps
                    </div>
                </div>
                <div className={Styles.inc}>
                    <div className={Styles.plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    <div className={Styles.boxnum}>
                        30
                    </div>
                    <div className={Styles.plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </div>
                </div>
                <div className={Styles.amt}>
                    <div>100rs</div>
                </div>
            </div>


            <div className={Styles.total}>

                <div className={Styles.tot}>
                    Total Amount =
                </div>

                <div className={Styles.totrs}>
                    900rs
                </div>
            </div>
            <div className={Styles.input}>

                <div className={Styles.inp}>
                    <div><label>First Name</label> <input type="text" /></div>
                    <div><label>Address</label> <input type="text" /></div>
                    <div><button className={Styles.btn}>Submit</button></div>
                </div>


            </div>
        </div>
    )
}

export default Cartsum