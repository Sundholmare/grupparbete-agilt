import Styles from "./hero.module.css";

const Hero = () => {
    return (
      <div className={Styles.hero}>
        <div className={Styles.heroBox}>
            <h1 className={Styles.heroTitle}>Your Abnormal Service Provider</h1>
            <p className={Styles.heroText}> You won't have to look far to find just the service you are looking for. We provide a huge variety of services and no task is too abnormal for us to help with. 
            <br></br>
            We truly have it all, it will be our promise. And if you can't find it in our lists, don't fret! You can contact us and we will make sure to provide just the service you want, no extra costs.
            <br></br>
            So what are you waiting for, register with us today and start being abnormal together with us!
              </p>

            <button className={Styles.heroButton}>Click here</button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  