import Styles from "./quotation.module.css";


const Quotation = () => {
    return (
      <div className={Styles.quota}>
        <h1 className={Styles.quotaQuestion}>Not finding what you're looking for?</h1>
        <div className={Styles.quotaBox}>
            <div className={Styles.quotaTitleBox}>
                <h1 className={Styles.quotaTitle}>QUOTATION</h1>
            </div>
            <form className={Styles.quotaForm}>
                <label for="name">Name*
                    <input type="text" id="name" name="fname" />
                    <input type="text" id="name" name="lname" />
                </label>
                <label for="email">Email*
                    <input type="text" id="email" name="email" />
                </label>
                <label for="phone">Phone #*
                    <input type="text" id="phone" name="phone" />
                </label>
                <label for="message">Message*
                    <input type="text" id="message" name="message" />
                </label>
            </form>
        </div>
      </div>
    );
  };
  
  export default Quotation;