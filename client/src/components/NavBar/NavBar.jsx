import {Link} from "react-router-dom";

const NavBar =() => {
    return (
        <>
            <Link to="/videogames">
                <button>Videogames</button>
            </Link>
            <Link to="/form">
                <button>Form</button>
            </Link>
        </>
    )
};
export default NavBar;