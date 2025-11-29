const Item = ({ name, price }) => {
    return (
        <div className="divPadre">
            <div>
                <h5>{name}</h5>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Item