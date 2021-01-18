const Carousel = ({title, items, onItem}) => {
    return <div className="carousel">
        <h2 className="carousel__title">{title}</h2>
        {items.map(({id, image}) => <div className="carousel__movie" key={id} onClick={() => onItem(id)}>
        {image && <img src={image} alt="item-img"/>}
    </div>)}
</div>
}