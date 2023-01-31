import s from "./Landing.module.css"
import { Link } from "react-router-dom";

const Landing =() => {
    return (
        <div className={s.container} >
            <div className={s.landing}>
                <h1>landing page</h1>
                <Link to="/videogames">
                    <button>PRESS START</button>
                </Link>
            </div>
        </div>
    )
};

export default Landing;