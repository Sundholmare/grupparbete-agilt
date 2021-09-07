import { useState } from 'react';
import list from './list.json';



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

    return(
        <main>
            <button onClick={() => filter("Article")} >Article</button>
            <button onClick={() => filter("News")} >News</button>
            <button onClick={() => descendingSort()} >Descending</button>
            <button onClick={() => ascendingSort()} >Ascending</button>
            {current.map(item => {
                return <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.date}</p>
                        <p>{item.author}</p>
                        <p>{item.type}</p>
                    </div>
            })}

        </main>
    )
}

export default News;