import { useDispatch, useSelector } from "react-redux";
import { getVideogamesByAlp, getVideogamesByRate } from "../../redux/actions";

const Filter = ({sort, setSort, setInput, setPage}) => {
    const dispatch = useDispatch();

    const handleRating = (e) => {
        dispatch(getVideogamesByRate(e.target.value))
        setSort(!sort)
        setInput(1)
        setPage(1)
    };

    const handleAlp = (e) => {
        dispatch(getVideogamesByAlp(e.target.value))
        setSort(!sort)
        setInput(1)
        setPage(1)
    };

    return (
        <div>
            <div>
                <label>Sort</label>
                <select name="Sort" id="Sort" onChange={handleAlp}>
                    <option value="sorting">-</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div>
                <label>Rating</label>
                <select name="Rating" id="Rating" onChange={handleRating}>
                    <option value="rating">-</option>
                    <option value="higer">major to minor</option>
                    <option value="lower">minor to major</option>
                </select>
            </div>
        </div>
    )
};

export default Filter;