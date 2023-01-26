import s from "./Home.module.css"
import { useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import { getVideogames } from "../../redux/actions";
import Card from "../Card.jsx/Card";
import { Paginacion } from "../Paginacion/Paginacion";

const Home =() => {
    //traer todos los videojuegos
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videoGames);
    useEffect(()=> {
        if(!videogames.length) dispatch(getVideogames());
    }, [dispatch]);
    //paginacion
    const [page, setPage] = useState(1);
    const [perPage] = useState(15);

    const max = videogames.length / perPage;

    return (
        <>
            <NavBar/>
            <div className={s.gridContainer}>
                <div className={s.grid}>
                    {
                        videogames?.slice((page - 1) * perPage, (page-1) * perPage + perPage)
                        .map(game => {
                            return(
                                <Card 
                                    name={game.name}
                                    img={game.img}
                                    genres={game.genres}
                                    id={game.id}
                                    key={game.id}
                                />
                            )
                        })
                    }
                </div>
                <Paginacion page={page} setPage={setPage} max={max}/>
            </div>
        </>
    )
};

export default Home;