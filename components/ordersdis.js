import Styles from "@/styles/orderdis.module.css"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react"


const Ordersdis = () => {
    const [orders, setOrders] = useState([]);
    const { data: session } = useSession();
    const email = session?.user?.email;

    useEffect(() => {
        if (email) {
            fetchOrders();
        }
    }, [email]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post("/api/orderdis", { email });
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(orders)
    return (
        <>
            {orders.map((order) => (
                <div key={order._id} className={Styles.box}>
                    <div className={Styles.box1}>
                        <img src="package.png" />
                    </div>
                    <div className={Styles.box2}>
                        <div>orderid: {order._id}</div>
                    </div>
                    <div className={Styles.box3}>
                        <div>Address: {order.address}</div>
                    </div>
                    <div className={Styles.box4}>
                        <div>Total: {order.amount/100}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Ordersdis