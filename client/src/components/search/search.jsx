import s from "./search.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getVideogamesByName} from "../../redux/actions";


const Search = ({setInput, setPage}) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = async () => {
        if (search.length) {
            await dispatch(getVideogamesByName(search));
            setSearch("");
            setInput(1);
            setPage(1);
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
             autoComplete="off" />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </>
    )
};

export default Search;