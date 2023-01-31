import s from "./Paginacion.module.css"

export const Paginacion = ({page, setPage, input, setInput, max}) => {
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
            <span className={s.text}> {input} of {Math.round(max)}</span>
            <button disabled={page === max || page > max}className={s.button} onClick={nextPage}>{">"}</button>
        </div>
    )
};
