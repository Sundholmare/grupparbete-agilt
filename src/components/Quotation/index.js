import Styles from "./quotation.module.css";


const Quotation = () => {
    return (
      <div className={Styles.quota}>
        <h1 className={Styles.quotaQuestion}>Not finding what you're looking for?</h1>
        <div className={Styles.quotaBox}>
            <div className={Styles.quotaTitleBox}>
                <h1 className={Styles.quotaTitle}>QUOTATION</h1>
            </div>
            <div className={Styles.quotaForm}>
                <form >
                    <div>
                        <label htmlFor="name">Name</label>
                            <span>
                                <input type="text" id="name" name="fname" />
                                <input type="text" id="name" name="lname" />
                            </span>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" name="phone" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" />
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
      </div>
    );
  };
  
  export default Quotation;