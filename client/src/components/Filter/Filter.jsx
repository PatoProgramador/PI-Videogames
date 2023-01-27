import { useDispatch, useSelector } from "react-redux";
import { getVideogamesByRate } from "../../redux/actions";

const Filter = ({sort, setSort, setInput}) => {
    const dispatch = useDispatch();

    const handleRating = (e) => {
        dispatch(getVideogamesByRate(e.target.value))
        setSort(!sort)
        setInput(1)
    };
    
    return (
        <div>
            <label htmlFor="">Rating</label>
            <select name="Rating" id="Rating" onChange={handleRating}>
                <option value="rating">rating</option>
                <option value="higer">major to minor</option>
                <option value="lower">minor to major</option>
            </select>
        </div>
    )
};

export default Filter;