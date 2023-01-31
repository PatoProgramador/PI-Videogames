import s from "./search.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getVideogamesByName} from "../../redux/actions";
import searchp from "../../assets/search.png"


const Search = ({setInput, setPage}) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (search.length) {
            await dispatch(getVideogamesByName(search));
            setSearch("");
            setInput(1);
            setPage(1);
        }
    };

    return(
        <div>
            <form className={s.searchbar} onSubmit={handleSubmit}>
                <input 
                id ="search" 
                type="search" 
                value={search}
                placeholder="videoGame..."
                onChange={(e) => handleSearch(e)}
                autoComplete="off" />
                <button type="submit"><img src={searchp} alt="search"/></button>
            </form>
        </div>
    )
};

export default Search;