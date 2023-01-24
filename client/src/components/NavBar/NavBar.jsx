import {Link} from "react-router-dom";

const NavBar =() => {
    return (
        <>
        <div>
            <Link to="/videogames">
                <button>Videogames</button>
            </Link>
            <Link to="/form">
                <button>Form</button>
            </Link>
        </div>
        </>
    )
};
export default NavBar;