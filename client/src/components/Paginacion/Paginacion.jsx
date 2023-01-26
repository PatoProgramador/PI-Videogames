import s from "./Paginacion.module.css"
import {useState} from 'react'

export const Paginacion = ({page, setPage, max}) => {
    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(input + 1);
        setPage(page + 1);
    };

    const previousPage = () => {
        setInput(input - 1);
        setPage(page - 1);
    };

    return (
        <div className={s.container}>
            <button disabled={page === 1 || page < 1} className={s.button} onClick={previousPage}>{"<"}</button>
            <input 
             name="page"
             autoComplete="off"
             className={s.input}
             value={input} />
            <span> of {Math.round(max)}</span>
            <button disabled={page === max || page > max}className={s.button} onClick={nextPage}>{">"}</button>
        </div>
    )
};
