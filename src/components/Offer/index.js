import Styles from "./offer.module.css";


const Offer = () => {
    return (
      <div className={Styles.offer}>
        <h1 className={Styles.offerTitle}>OFFER</h1>
        <section className={Styles.offerCards}>
          <div className={Styles.offerCardOne}>
            <h1 className={Styles.offerCardTitle}>5% off</h1>
            <p className={Styles.offerCardPara}>On your 5th ordered service</p>
          </div>
          <div className={Styles.offerCardTwo}>
            <h1 className={Styles.offerCardTitle}>15% off</h1>
            <p className={Styles.offerCardPara}>On your 10th ordered service</p>
          </div>
          <div className={Styles.offerCardThree}>
            <h1 className={Styles.offerCardTitle}>25% off</h1>
            <p className={Styles.offerCardPara}>On your 15th ordered service</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default Offer;
  