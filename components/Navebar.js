import Styles from '@/styles/Navbar.module.css'
import { useState } from 'react'


const Navebar = () => {
    const [login, setlogin] = useState(false)
    const [tick, settick] = useState(false)

    return (
        <header className={Styles.header}>
            <nav className={Styles.nav}>
                <div className={Styles.navlogo}>
                    <img className={Styles.navimg} src='chips.png' />
                    <div className={Styles.name}>My Chip</div>
                </div>
                <div className={`${Styles.navlist} ${tick && Styles.mobile}`}>
                    <div>Products</div>
                    <div>Contact</div>
                    <div>Help</div>
                    <div>Join</div>
                    <div className={Styles.navclose} onClick={() => settick(!tick)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={Styles.closebtn}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className={Styles.cartbtns}>
                    {login && <button className={Styles.loginbtt}>Login</button>}
                    {!login && <div className={Styles.loginbtt}>Cart<img className={Styles.cart} src='cart.png'></img></div>}

                    <div className={Styles.ham} onClick={() => settick(!tick)}><img className={Styles.cartss} src='bars.png'></img></div>
                </div>
            </nav>
        </header>


    )
}

export default Navebar