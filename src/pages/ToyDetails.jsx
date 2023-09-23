import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Audio } from 'react-loader-spinner'
// import { removeToyOptimistic } from "../../store/actions/toy.actions";
import { toyService } from "../services/toy.service";


export function ToyDetails() {
    const [currToy, setCurrToy] = useState(null)

    const params = useParams()
    const navigate = useNavigate()

    const { toyId } = useParams()

    useEffect(() => {
        loadToy()
    })

    function loadToy() {
        toyService.getById(toyId)
            .then(setCurrToy)
            .catch((err) => {
                showErrorMsg('Cant load toy')
                navigate('/toy')
            })
    }



    if (!currToy) return <Audio
        height="180"
        width="180"
        radius="30"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
    />

    const { _id, name, price, inStock } = currToy


    return (
        <section className="toy-details">
            <div className="toy-data-container">
                <h1>Id: {_id}</h1>
                <h1>Toy Name: {name}</h1>
                <h4>Price: {price}</h4>
                <p style={{ color: inStock ? 'green' : 'red' }}>
                    {inStock ? 'In Stock' : 'Not In Stock'}
                </p>
                <button className="back-btn" onClick={() => navigate('/toy')}>
                    Back
                </button>

                <button><Link to={`/toy/edit/${_id}`}>Edit</Link></button>
            </div>
        </section>
    )


}