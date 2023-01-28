import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import { getGenres, getPlatforms} from "../../redux/actions";
import Card from "../Card/Card";

const Form = () => {
    const dispatch = useDispatch();

    //trayendo Genres y platforms
    const genres = useSelector((state) => state.genres);
    const platform = useSelector((state) => state.platforms);

    useEffect(() => {
        dispatch(getPlatforms())
        dispatch(getGenres())
    }, [dispatch])

    //formulario
    const [game, setGame] = useState({
        name: "",
        released: "",
        description: "",
        genres: [],
        platforms: [],
        img: "",
        rating: 0,
    });

    const handleInput = (e) => {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        })
    };

    //añadir y eliminar platforms
    const handleSelectPlatform = (e) => {
        if(e.target.value !== "platforms" && !game.platforms.includes(e.target.value)) {
            setGame({
                ...game,
                platforms: [...game.platforms, e.target.value]
            })
        }
    };

    const handleDeletePlatform = (e) => {
        e.preventDefault();
        setGame({
            ...game,
            platforms: game.platforms.filter(plat => plat !== e.target.value)
        })
    }
    //añadir y eliminar genres
    const handleSelectGenre = (e) => {
        if(e.target.value !== "genres" && !game.genres.includes(e.target.value)) {
            setGame({
                ...game,
                genres: [...game.genres, e.target.value]
            });
        }
    };

    const handleDeleteGenre = (e) => {
        e.preventDefault();
        setGame({
            ...game,
            genres: game.genres.filter(genre => genre !== e.target.value)
        });
    };

    const handleCreate = () => {
        axios.post("")
    };

    return (
        <div>
            <Link to="/videogames">
                <button>{"<"}</button>
            </Link>
            <h2>Create Videogame</h2>
            <form action="">
                <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    onChange={handleInput}
                    autoComplete="off"
                />
                <label>Desciption</label>
                <input 
                    type="text"
                    name="description"
                    onChange={handleInput}
                />
                <label>Released</label>
                <input 
                    type="text"
                    name="released"
                    onChange={handleInput}
                />
                <label>Rating</label>
                <input 
                    type="text"
                    name="rating"
                    onChange={handleInput}
                />
                <label>Image</label>
                <input 
                    type="text" 
                    name="img"
                    onChange={handleInput}
                />
                <select name="platforms" onChange={handleSelectPlatform}>
                    <option value="platforms">Platforms</option>
                    {platform?.map((pla, i) => {return(<option key={i}>{pla.name}</option>)})}
                </select>
                <select name="genres" onChange={handleSelectGenre}>
                    <option value="genres">genres</option>
                    {genres?.map((genre, i) => {return(<option key={i}>{genre.name}</option>)})}
                </select>
                <button type="submit">CREATE</button>
            </form>
            <div >
                <h1>Your Game</h1>
                <img  src={game.img} alt="Here is the image D:"/>
                <h3>Name: {game.name}</h3>
                <h1>Rating: {game.rating}</h1>
                <h1>Platforms:</h1>
                <div>
                    {
                        game.platforms?.map((plat, index) => {
                            return(
                                <span key={index} >{plat}<button value={plat} onClick={handleDeletePlatform} >X</button></span>
                            )
                        })
                    }
                </div>
                <h1>Genres: </h1>
                <div>
                    {
                        game.genres?.map((genre, index) => {
                            return(
                                <span key={index} >{genre}<button value={genre} onClick={handleDeleteGenre} >X</button></span>
                            )
                        })
                    }
                </div>
                <h1>Description:</h1>
                <h3>{game.description}</h3>
            </div>
        </div>
    )
};

export default Form;