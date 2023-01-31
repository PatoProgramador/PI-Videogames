import s from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({name, img, genres, id, rate}) => {
    return(
        <div className={s.container}>
            <Link style={{ textDecoration: 'none' }} to={`/detail/${id}`}>
                <div className={s.card}>
                    <img className={s.img} src={img} alt={name} />
                    <h2 className={s.name}>{name}</h2>
                    <span className={s.rate}>⭐{rate}</span>
                    <div className={s.genrebox}>
                        {
                            genres.length > 7 ?
                            genres?.slice(0, 7).map((genre) => (<div><span className={s.genre}>{genre}</span></div>))
                            : genres?.map((genre) => (<div><span className={s.genre}>{genre}</span></div>))
                        }
                    </div>
                </div>
            </Link>
            </div>
        
    )
};

export default Card;