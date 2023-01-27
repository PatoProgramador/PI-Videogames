import s from "./Home.module.css"
import { useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import { getGenres, getVideogames } from "../../redux/actions";
import Card from "../Card/Card";
import { Paginacion } from "../Paginacion/Paginacion";
import Loading from "../Loading/Loading";
import Errors from "../Error/Error";
import Filter from "../Filter/Filter"

const Home =() => {
    //traer todos los videojuegos y generos
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.sortGames);
    const genres = useSelector(state => state.genres)
    const error = useSelector(state => state.error);

    useEffect(()=> {
        if(!videogames.length) dispatch(getVideogames());
        if(!genres.length) dispatch(getGenres())
    }, [dispatch, videogames, genres]);

    //filtrado
    const [sort, setSort] = useState(true);

    //paginacion
    const [page, setPage] = useState(1);
    const [input, setInput] = useState(1);
    const [perPage] = useState(15);

    const max = videogames.length / perPage;

    return (
        <>
            {
                videogames.length ?
                <div>
                    {error && <Errors/>}
                    <NavBar/>
                    <Filter sort={sort} setSort={setSort} setInput={setInput} setPage={setPage} />
                    <div className={s.gridContainer}>
                        <div className={s.grid}>
                            {
                                videogames?.slice((page - 1) * perPage, (page-1) * perPage + perPage)
                                .map(game => {
                                    return(
                                        <Card 
                                            name={game.name}
                                            img={game.img}
                                            rate={game.rating}
                                            genres={game.genres}
                                            id={game.id}
                                            key={game.id}
                                        />
                                    )
                                })
                            }
                        </div>
                        <Paginacion input={input} setInput={setInput} page={page} setPage={setPage} max={max}/>
                    </div> 
                </div> : <Loading/>
            } 
        </>
    )
};

export default Home;