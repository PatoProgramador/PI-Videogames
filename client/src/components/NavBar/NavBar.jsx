import s from "./NavBar.module.css"
import {Link} from "react-router-dom";
import Search from "../search/search";

const NavBar =({setInput, setPage}) => {
    return (
        <>
        <div className={s.container}>
            <Link to="/videogames">
                <button>Videogames</button>
            </Link>
            <Search setInput={setInput} setPage={setPage}/>
            <Link to="/form">
                <button>Form</button>
            </Link>
        </div>
        </>
    )
};
export default NavBar;