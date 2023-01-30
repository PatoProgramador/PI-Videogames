import s from "./Form.module.css";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import { createVideogame, getGenres, getPlatforms} from "../../redux/actions";

const Form = () => {
    const dispatch = useDispatch();

    //trayendo Genres y platforms
    const genres = useSelector((state) => state.genres);
    const platform = useSelector((state) => state.platforms);

    useEffect(() => {
        dispatch(getPlatforms())
        dispatch(getGenres())
    }, [dispatch])

    //formulario y errores
    const [error, setError] = useState({});
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
        setError(validate({
            ...game,
            [e.target.name]: e.target.value,
        }))
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

    const validate = (form) =>{
        const errors = {};
        if(game.name.length < 2) {errors.name = "Name must have at least 2 characters"};
        if(game.description.length < 15) {errors.description = "Description must have at least 15 characters"};
        if(game.rating < 0) {errors.rating = "Rating must be greater than 0"}
        if(isNaN(game.rating)) {errors.rating = "Rating must be a number"}
        if(game.genres.length < 1) {errors.genres = "The game must have at least one gender"}
        if(game.platforms.length < 1) {errors.platforms = "the game must have at least one platform"}
        return errors;
    };

    //Logica para postear el game
    // let post = await axios.post("http://localhost:3001/videogames", game)
    const handleCreate = async(e)  => {
        e.preventDefault()
        setError(validate(game))
        if(Object.values(error).length>0) {
            return alert("Please verify that all fields are filled in correctly");
        } else {
            dispatch(createVideogame(game));
            alert("Game Created!");
            window.location.reload();
        }
    };

    return (
        <div className={s.container}>
            <Link to="/videogames">
                <button>{"<"}</button>
            </Link>
            <div className={s.formC}>
                <form className={s.form} onSubmit={handleCreate}>
                    <h2>Create Videogame</h2>
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name"
                        onChange={handleInput}
                        autoComplete="off"
                    /> 
                    {error.name && <span>{error.name}</span>}
                    <label>Desciption</label>
                    <input 
                        type="text"
                        name="description"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    {error.description && <span>{error.description}</span>}
                    <label>Released</label>
                    <input 
                        type="text"
                        name="released"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    <label>Rating</label>
                    <input 
                        type="text"
                        name="rating"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    {error.rating && <span>{error.rating}</span>}
                    <label>Image</label>
                    <input 
                        type="text" 
                        name="img"
                        onChange={handleInput}
                        autoComplete="off"
                    />
                    <select name="platforms" onChange={handleSelectPlatform}>
                        <option value="platforms">Platforms</option>
                        {platform?.map((pla, i) => {return(<option key={i}>{pla.name}</option>)})}
                    </select>
                    {error.platforms &&<span>{error.platforms}</span>}
                    <select name="genres" onChange={handleSelectGenre}>
                        <option value="genres">genres</option>
                        {genres?.map((genre, i) => {return(<option key={i}>{genre.name}</option>)})}
                    </select>
                    {error.genres &&<span>{error.genres}</span>}
                    <button type="submit">CREATE</button>
                </form>
            </div>
            <div className={s.card} >
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