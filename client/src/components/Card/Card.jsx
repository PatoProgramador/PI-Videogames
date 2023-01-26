import s from './Card.module.css';

const Card = ({name, img, genres, id}) => {
    return(
        <div className={s.container}>
            <img className={s.img} src={img} alt={name} />
            <p>Nombre: {name}</p>
            <p>Generos: {genres}</p>
        </div>
    )
};

export default Card;