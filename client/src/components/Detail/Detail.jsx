import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import  Loading  from '../Loading/Loading'
import s from "./Detail.module.css"


const Detail = () => {
    let {id} = useParams();
    const [game, setGame] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/videogame/${id}`)
            .then(result => setGame(result.data))
    }, [id]);

    return(
        <div className={s.container}>
            <div className={s.buttoncontainer}>
                <Link to="/videogames">
                    <button className={s.homeButt}>{"Return to videoGames"}</button>
                </Link>
            </div>
            {
                game ?
                <div className={s.gridContainer}>
                        <h2 className={s.name}>{game.name}</h2>
                        <div className={s.divimg}>
                            <img className={s.img} src={game.img} alt={game.img} />
                        </div>
                        <div>
                            <h2 className={s.title}>Rating:</h2>
                            <span className={s.rate}>{game.rating}</span>
                        </div>
                        <div className={s.genregrid}>
                            <h2 className={s.genretitle}>Genres:</h2>
                            { 
                                game.genres.length > 1 ? 
                                    game.genres?.map((genre) => {
                                        return (
                                            <h4 className={s.genre}>{genre}</h4>
                                        )
                                    })
                                : <h4 className={s.unique}>{game.genres}</h4>
                            }
                        </div>
                        <div>
                            <h2 className={s.rele}>Released:</h2>
                            <span className={s.released}>{game.released}</span>
                        </div>
                        <div className={s.platgrid}>
                            <h2 className={s.plattitle}>Platforms:</h2>
                            { 
                                game.platforms.length > 1 ? 
                                    game.platforms?.map((plat) => {
                                        return (
                                            <h4 className={s.genre}>{plat}</h4>
                                        )
                                    })
                                :  <h4 className={s.unique}>{game.platforms}</h4>       
                            }
                        </div>
                        <div className={s.descrip}>
                            <h2 className={s.plattitle}>Decription:</h2>
                            <h4 className={s.description}>
                                {
                                    game.description?.split("<p>")
                                    .join("\n")
                                    .split("<p>")
                                    .join(" ")
                                    .split("<br />")
                                    .join("\n")
                                }
                            </h4>
                        </div>
                    </div> : <Loading/>
            } 
        </div>
    )

};

export default Detail;