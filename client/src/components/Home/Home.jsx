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
            <div>
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
        </>
    )
};

export default Home;