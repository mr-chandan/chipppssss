import Styles from '@/styles/Cartnav.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router';

const Cartnav = () => {
    const [open, setopen] = useState(false)
    const router = useRouter();
    const redirectToHome = () => {
        router.push('/');
    };

    const orders = () => {
        router.push('/orders')
    }
    return (
        <div className={Styles.nav}>
            <div className={Styles.logo} onClick={redirectToHome}>
                <img src="chips.png" className={Styles.navimg}></img>
                <div className={Styles.navtxt}>My Chip</div>
            </div>
            <div className={`${Styles.navlink} ${open && Styles.navopen}`}>
                <div onClick={redirectToHome}>Home</div>
                <div>Contact</div>
                <div onClick={orders}>Orders</div>
                <div>Help</div>
                <div className={Styles.close} >

                    <img src='close2.png' onClick={() => { setopen(!open) }} className={Styles.close2}></img>
                </div>
            </div>
            <div className={Styles.ham} onClick={() => { setopen(!open) }}>
                <img src='bars.png' />
            </div>
        </div>
    )
}

export default Cartnav