import Styles from "./quotation.module.css";


const Quotation = () => {
    return (
      <div className={Styles.quota}>
        <h1 className={Styles.quotaQuestion}>Hittar du inte det du söker?</h1>
        <div className={Styles.quotaBox}>
            <div className={Styles.quotaTitleBox}>
                <h1 className={Styles.quotaTitle}>OFFERT</h1>
            </div>
            <div className={Styles.quotaForm}>
                <form >
                    <div>
                        <label for="name">Namn</label>
                            <span>
                                <input type="text" id="name" name="fname" />
                                <input type="text" id="name" name="lname" />
                            </span>
                    </div>
                    <div>
                        <label for="email">Epost</label>
                            <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label for="phone">Telefon</label>
                            <input type="text" id="phone" name="phone" />
                    </div>
                    <div>
                        <label for="message">Meddelande</label>
                            <textarea id="message" name="message" />
                    </div>
                    <button>Skicka</button>
                </form>
            </div>
        </div>
      </div>
    );
  };
  
  export default Quotation;