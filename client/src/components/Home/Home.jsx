import s from "./Home.module.css"
import { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import { getVideogames } from "../../redux/actions";
import Card from "../Card.jsx/Card";

const Home =() => {
    const dispatch = useDispatch();
    const videogames = useSelector(state => state.videoGames);
    useEffect(()=> {
        if(!videogames.length) dispatch(getVideogames());
    }, [dispatch]);
    return (
        <>
            <NavBar/>
            <h1>Home page</h1>
            <div className={s.gridContainer}>
                <div className={s.grid}>
                    {
                        videogames?.map(game => {
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
            </div>
        </>
    )
};

export default Home;