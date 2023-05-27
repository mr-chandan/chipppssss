import Styles from '@/styles/Hero.module.css'

const Hero = ({ ordersRef }) => {
  const handleShopClick = () => {

    const scrollPercentage = 0.5;
    const scrollPosition = scrollPercentage * (document.documentElement.scrollHeight - window.innerHeight);


    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className={Styles.Hero}>
        <div className={Styles.grid1}>
          <div className={Styles.herotxt}>
            Buy world class <br></br>premium chip at
            <br></br> only my Chip
          </div>
          <div className={Styles.herobtn}>
            <button className={Styles.btn1} onClick={handleShopClick}>
              Shop <img src='cart.png' className={Styles.buy}></img>
            </button>
            <button className={Styles.btn2} onClick={handleShopClick}>
              Explore <img src='search.png' className={Styles.search}></img>
            </button>
          </div>
        </div>
        <div className={Styles.grid2}>
          <img className={Styles.chips} src='herochips.png'></img>
        </div>
      </div>
    </div>
  )
}

export default Hero