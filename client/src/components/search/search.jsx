import s from "./search.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getVideogamesByName} from "../../redux/actions";


const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = () => {
        if (search.length) {
            dispatch(getVideogamesByName(search));
            setSearch("");
        }
    };

    return(
        <>
            <input 
             id ="search" 
             type="search" 
             value={search}
             placeholder="VideoGame..."
             onChange={(e) => handleSearch(e)}
             autoComplete="on" />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </>
    )
};

export default Search;