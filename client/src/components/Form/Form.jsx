import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import { getGenres, getVideogames } from "../../redux/actions";

const Form = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);

    useEffect(() => {
        dispatch(getVideogames())
        dispatch(getGenres())
    }, [dispatch])

    //sacando plataformas
    let games = useSelector((state) => state.videoGames);
    let platf = games.map((game) => game.platforms);
    platf = platf.filter((pla, i) => {
        return platf.indexOf(pla) === i;
    })

    //formulario
    const [form, setForm] = useState({
        name: "",
        released: "",
        description: "",
        genres: [],
        platforms: [],
        img: "",
        rating: 0,
    });

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div>
            <Link to="/videogames">
                <button>{"<"}</button>
            </Link>
            <h2>Create Videogame</h2>
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
                {platf?.map((pla, i) => {return(<option key={i}>{pla}</option>)})}
            </select>
            <select name="genres" onChange={handleInput}>
                {genres?.map((genre, i) => {return(<option key={i}>{genre.name}</option>)})}
            </select>
            <button >CREATE</button>
        </div>
    )
};

export default Form;