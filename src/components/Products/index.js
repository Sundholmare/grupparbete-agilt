import Styles from "./products.module.css";


const Products = () => {
    return (
      <div className={Styles.products}>
        <section className={Styles.productsSidebar}>
            <h1>Household</h1>
            <ul>
                <li>Wash dishes</li>
                <li>Vaccum</li>
                <li>Take out trash</li>
                <li>Clean drains</li>
            </ul>
            <h1>Garden</h1>
            <ul>
                <li>Water flowers</li>
                <li>Clear out weed</li>
                <li>Mow the lawn</li>
                <li>Trim the hedge</li>
            </ul>
            <h1>Caretaker</h1>
            <ul>
                <li>Babysitter</li>
                <li>Petsitter</li>
            </ul>
            <h1>Tech</h1>
            <ul>
                <li>Repairs</li>
                <li>Installments</li>
                <li>UX Testing</li>
            </ul>
        </section>
        <section className={Styles.productsList}></section>
      </div>
    );
  };
  
  export default Products;