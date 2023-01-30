import s from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({name, img, genres, id, rate}) => {
    return(
        <div className={s.container}>
            <Link to={`/detail/${id}`}>
                <div className={s.card}>
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
            </div>
        
    )
};

export default Card;