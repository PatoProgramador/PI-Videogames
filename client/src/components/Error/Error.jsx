import s from "./Error.module.css";
import { useDispatch } from "react-redux";
import { closeError } from "../../redux/actions";

const Errors = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(closeError());
    };

    return (
        <div className={s.container}>
            <div className={s.errorCard}>
                <button onClick={handleClick}>X</button>
                <h1>Not Found</h1>
            </div>
        </div>
    )
};

export default Errors;