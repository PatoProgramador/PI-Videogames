import s from "./NavBar.module.css"
import {Link} from "react-router-dom";
import Search from "../search/search";
import icon from "../../assets/favicon.ico"

const NavBar =({setInput, setPage}) => {
    return (
            <nav className={s.nav}>
                <div>
                <Link className={s.logocont} style={{ textDecoration: 'none' }} to="/videogames">
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