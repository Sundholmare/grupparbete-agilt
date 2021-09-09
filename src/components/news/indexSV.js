import { useState } from 'react';
import list from './listSV.json';
import Style from './news.module.css'



const News = () => {

    const [items, setItems] = useState(list);
    const [current, setCurrent] = useState(list);

    console.log(items);

    const filter = (value) => {

        setCurrent(items);

        console.log(current, 'i filter funktion');

        setCurrent(items.filter(item => item.type === value));
    }

    const descendingSort = () => { // Sort funktion för descending ordning

        const sorted = current.sort((a, b) => {
            return new Date(a.date) - new Date(b.date); // descending
        })

        console.log(current, 'I sort funktion');

        setCurrent((prevCurrent) => [...sorted]);
    }


    const ascendingSort = () => { // Sort funktion för ascending ordning

        const sorted = current.sort((a, b) => {
            return new Date(b.date) - new Date(a.date); // ascending
        })

        console.log(current, 'I sort funktion');

        setCurrent((prevCurrent) => [...sorted]);
    }

    return (
        <main className={Style.background}>
            <div className={Style.wrapper}>
                <div className={Style.content}>
                    <div className={Style.filterBox}>
                        <div className={Style.filter}>
                            <h4>Filtrera</h4>
                            <span>
                                <button onClick={() => filter("News")} >Nyheter</button>
                                <button onClick={() => filter("Article")} >Artiklar</button>
                            </span>
                        </div>
                        <div className={Style.sort}>
                            <h4>Sortera efter datum</h4>
                            <span>
                                <button onClick={() => descendingSort()} >Nyast</button>
                                <button onClick={() => ascendingSort()} >Äldst</button>
                            </span>
                        </div>
                    </div>
                    {current.map(item => (
                        <article className={Style.article} key={item.id}>
                            <div className={Style.articleContent}>
                                <h2 className={Style.heading}>{item.title}</h2>
                                <p className={Style.author}>Av: {item.author}</p>
                            </div>
                            <div className={Style.articleContent}>
                                <p className={Style.date}>{item.date}</p>
                                <p className={item.type === 'Artikel' ? `${Style.type}` : `${Style.type} ${Style.purple}`}>{item.type}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default News;