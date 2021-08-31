import Styles from "./hero.module.css";

const Hero = () => {
    return (
      <div className={Styles.hero}>
        <div className={Styles.heroBox}>
            <h1 className={Styles.heroTitle}>Your Abnormal Service Provider</h1>
            <p className={Styles.heroText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec amet a et posuere tincidunt. Nisi eget nulla eu pellentesque. A in tristique ultrices a mi. Quis sit risus enim eget semper. A molestie tellus aliquam dolor non a viverra. Bibendum tincidunt tellus pulvinar orci. Faucibus elit sit velit tortor at nisi. Dui vel hac leo pretium, lacus, mattis magna. Ipsum lobortis dolor scelerisque ligula nisi nibh.</p>

            <button className={Styles.heroButton}>Click here</button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  