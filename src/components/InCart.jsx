export const InCart = ({item}) => {

    const {name, price, image} = item

    return (
        <tr>
            <td>
                <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen guitarra" />
            </td>
            <td>{name}</td>
            <td className="fw-bold">
                ${price}
            </td>
            <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    className="btn btn-dark"
                >
                    -
                </button>
                1
                <button
                    type="button"
                    className="btn btn-dark"
                >
                    +
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button"
                >
                    X
                </button>
            </td>
        </tr>
    )
}