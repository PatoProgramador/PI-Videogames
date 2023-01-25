const Card = ({name, img, genres, id}) => {
    return(
        <div>
            <img src={img} alt={name}/>
            <p>Nombre: {name}</p>
            <p>Generos: {genres}</p>
        </div>
    )
};

export default Card;