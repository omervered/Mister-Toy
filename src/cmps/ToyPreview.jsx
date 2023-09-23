import { useParams, useNavigate } from "react-router-dom"




export function ToyPreview({ toy }) {
    const { price, name } = toy
    const navigate = useNavigate()

    return (
        <div className="toy-item">
            <h3>{name}</h3>
            <p>{price}$</p>
            <button onClick={() => navigate(`/toy/${toy._id}`)}>More Details</button>
        </div>
    )

}