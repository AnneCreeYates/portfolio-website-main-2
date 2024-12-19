
function CardComponent(props) {
    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.value}</p>
        </div>
    )
}
export default CardComponent;