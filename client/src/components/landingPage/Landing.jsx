import s from "./Landing.module.css"
import { Link } from "react-router-dom";

const Landing =() => {
    return (
        <div className={s.container} >
            <div className={s.landing}>
                <Link to="/videogames">
                    <button className={s.button}>PRESS START</button>
                </Link>
            </div>
        </div>
    )
};

export default Landing;