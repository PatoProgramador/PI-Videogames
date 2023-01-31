import s from "./NavBar.module.css"
import {Link} from "react-router-dom";
import Search from "../search/search";
import icon from "../../assets/favicon.ico"
import {resetFilters} from "../../redux/actions"
import {useDispatch} from "react-redux";

const NavBar =({setInput, setPage}) => {
    const dispatch = useDispatch();
    const handleHome = () => {
        dispatch(resetFilters())
        setInput(1)
        setPage(1)
    }
    return (
            <nav className={s.nav}>
                <div>
                <Link onClick={handleHome} className={s.logocont} style={{ textDecoration: 'none' }} to="/videogames">
                    <img className={s.logo} src={icon} alt="logo" />
                </Link>
                </div>
                <div>
                    <Search setInput={setInput} setPage={setPage}/>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/form">
                        <span className={s.create}>Create Game</span>
                    </Link>
                </div>
            </nav>
    )
};
export default NavBar;