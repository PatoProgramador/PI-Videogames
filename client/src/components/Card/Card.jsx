import s from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({name, img, genres, id, rate}) => {
    return(
        <Link to={`/detail/${id}`}>
            <div className={s.container}>
                <img className={s.img} src={img} alt={name} />
                <h3>{name}</h3>
                <h1>{rate}</h1>
                <div>
                    {
                        genres.length > 5 ?
                        genres?.slice(0, 5).map((genre) => (<div><span>{genre}</span></div>))
                        : genres?.map((genre) => (<div><span>{genre}</span></div>))
                    }
                </div>
            </div>
        </Link>
        
    )
};

export default Card;