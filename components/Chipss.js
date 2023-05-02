import Styles from '@/styles/Chipss.module.css'

const Chipss = () => {
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
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.chipname}>Chaps</div>
                        <img src='packetchips.png' className={Styles.cardimg}/>
                        <button className={Styles.addbtn}>ADD to cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chipss