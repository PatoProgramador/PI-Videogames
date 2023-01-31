import s from "./Error.module.css";
import { useDispatch} from "react-redux";
import { closeError } from "../../redux/actions";
import error from "../../assets/error.gif"

const Errors = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(closeError());
    };

    return (
        <div className={s.container}>
            <div className={s.errorCard}>
                <button className={s.button} onClick={handleClick}>X</button>
                <img  src={error} alt="error"/>
            </div>
        </div>
    )
};

export default Errors;