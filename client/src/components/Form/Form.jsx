import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import { getGenres, getPlatforms} from "../../redux/actions";

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
                <select name="platforms" onChange={handleInput}>
                    <option value="platforms">Platforms</option>
                    {platform?.map((pla, i) => {return(<option key={i}>{pla.name}</option>)})}
                </select>
                <select name="genres" onChange={handleInput}>
                    <option value="genres">genres</option>
                    {genres?.map((genre, i) => {return(<option key={i}>{genre.name}</option>)})}
                </select>
                <button type="submit">CREATE</button>
            </form>
        </div>
    )
};

export default Form;