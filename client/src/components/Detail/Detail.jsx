import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import  Loading  from '../Loading/Loading'


const Detail = () => {
    let {id} = useParams();
    const [game, setGame] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3001/videogame/${id}`)
            .then(result => setGame(result.data))
    }, [id]);

    return(
        <div>
            {
                game ?
                <div>
                        <Link to="/videogames">
                            <button> {"<"}</button>
                        </Link>
                        <h1>Details</h1>
                        <h2>{game.name}</h2>
                        <img src={game.img} alt={game.img} />
                        <div>
                            <h2>Platforms:</h2>
                            {
                                game.platforms?.map((plat) => {
                                    return (
                                        <h4>{plat}</h4>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <h2>Genres:</h2>
                            {
                                game.genres?.map((genre) => {
                                    return (
                                        <h4>{genre}</h4>
                                    )
                                })
                            }
                        </div>
                        <h2>Rating: <span>{game.rating}</span></h2>
                        <h2>Released: <span>{game.released}</span></h2>
                        <h2>Decription:</h2>
                        <h4>
                            {
                                game.description?.split("<p>")
                                .join("\n")
                                .split("<p>")
                                .join(" ")
                                .split("<br />")
                                .join("\n")
                            }
                        </h4>
                    </div> : <Loading/>
            } 
        </div>
    )

};

export default Detail;