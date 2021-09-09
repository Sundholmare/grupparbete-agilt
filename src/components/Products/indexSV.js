import Styles from "./products.module.css";
import products from './products.json'


const Products = () => {
    return (
      <div className={Styles.products}>
        <section className={Styles.productsSidebar}>
            <h1>Hushåll</h1>
            <ul>
                <li>Diska</li>
                <li>Dammsuga</li>
                <li>Ta ut sopor</li>
                <li>Rensa avlopp</li>
            </ul>
            <h1>Trädgård</h1>
            <ul>
                <li>Vattna blommor</li>
                <li>Rensa ogräs</li>
                <li>Klippa gräset</li>
                <li>Klippa häcken</li>
            </ul>
            <h1>Passning</h1>
            <ul>
                <li>Barnpassning</li>
                <li>Husdjurspassning</li>
            </ul>
            <h1>Teknik</h1>
            <ul>
                <li>Reparationer</li>
                <li>Installering</li>
                <li>UX Testning</li>
            </ul>
        </section>
        <section className={Styles.productsList}>
            {products.map((product) => {
                return <div className={Styles.productCard} key={product.id}>
                    <div className={Styles.productImage}><img src={product.img} alt="" /></div>
                    <h2 className={Styles.productTitle}>{product.titleSV}</h2>
                    <h3 className={Styles.productPrice}>{product.priceSV}</h3>
                    <button className={Styles.productButton}>See Listings</button>
                </div>
            })}
        </section>
      </div>
    );
  };
  
  export default Products;