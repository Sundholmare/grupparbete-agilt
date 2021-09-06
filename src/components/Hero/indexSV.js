import Styles from "./hero.module.css";

const Hero = () => {
    return (
      <div className={Styles.hero}>
        <div className={Styles.heroBox}>
            <h1 className={Styles.heroTitle}>Din onormala tjänsteleverantör</h1>
            <p className={Styles.heroText}> Du behöver inte leta långt för att hitta den tjänst du söker. Vi erbjuder ett stort utbud av tjänster och ingen uppgift är för onormal för att vi ska kunna hjälpa dig.
            <br></br>
            Vi har verkligen allt, det är vårt löfte. Och om du inte hittar det i våra listor, oroa dig inte! Du kan kontakta oss så ser vi till att tillhandahålla just den tjänst du vill ha, inga extra kostnader.
            <br></br>       
            Så vad väntar du på, registrera dig hos oss idag och börja vara onormal tillsammans med oss!</p>

            <button className={Styles.heroButton}>Klicka här</button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  