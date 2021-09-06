import Styles from "./offer.module.css";


const Offer = () => {
    return (
      <div className={Styles.offer}>
        <h1 className={Styles.offerTitle}>ERBJUDANDE</h1>
        <section className={Styles.offerCards}>
          <div className={Styles.offerCardOne}>
            <h1 className={Styles.offerCardTitle}>5% rabatt</h1>
            <p className={Styles.offerCardPara}>På din 5:e beställda service</p>
          </div>
          <div className={Styles.offerCardTwo}>
            <h1 className={Styles.offerCardTitle}>15% rabatt</h1>
            <p className={Styles.offerCardPara}>På din 10:e beställda service</p>
          </div>
          <div className={Styles.offerCardThree}>
            <h1 className={Styles.offerCardTitle}>25% rabatt</h1>
            <p className={Styles.offerCardPara}>På din 15:e beställda service</p>
          </div>
        </section>
      </div>
    );
  };
  
  export default Offer;