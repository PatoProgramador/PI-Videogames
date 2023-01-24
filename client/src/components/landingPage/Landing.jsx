import { Link } from "react-router-dom";

const Landing =() => {
    return (
        <>
            <h1>landing page</h1>
            <Link to="/videogames">
                <button>Home</button>
            </Link>
        </>
    )
};

export default Landing;