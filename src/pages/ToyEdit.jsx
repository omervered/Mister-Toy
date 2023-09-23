import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"

import { toyService } from "../services/toy.service"
import { saveToy } from "../../store/actions/toy.actions"

export function ToyEdit() {

    const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())

    const navigate = useNavigate()
    const params = useParams()

    const [selectedLabel, setSelectedLabel] = useState('')
    const labels = toyService.getLabels()

    useEffect(() => {
        if (params.toyId) loadToy()
    }, [])

    function loadToy() {
        toyService.getById(params.toyId)
            .then(setToyToEdit)
            .catch(err => {
                console.log('Issue with editing:', err)
                navigate('/toy')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setToyToEdit(prevtoy => ({ ...prevtoy, [field]: value }))
    }

    function onSaveToy(ev) {
        ev.preventDefault()

        const newToy = {
            ...toyToEdit,
            inStock: (toyToEdit.inStock === 'true') ? true : false
        }

        saveToy(newToy)
            .then(() => {
                showSuccessMsg('Toy saved successfully')
                navigate('/toy')
            })
            .catch(err => {
                showErrorMsg('Can not save toy, please try again')
                console.log('err:', err)
            })
    }


    const { name, price } = toyToEdit

    return (
        (
            <section className="toy-edit">
                <h2>{toyToEdit._id ? 'Edit' : 'Add'} Toy</h2>

                <form onSubmit={onSaveToy} className="flex flex-column justify-center book-edit-form" >
                    <label htmlFor="name">Toy Name:</label>
                    <input onChange={handleChange} value={name} type="text" name="name" id="name" />

                    <label htmlFor="price">Toy Price:</label>
                    <input onChange={handleChange} value={price} type="number" name="price" id="price" />

                    <label htmlFor="label">Label:</label>
                    <select onChange={(e) => setSelectedLabel(e.target.value)} value={selectedLabel} id="label">
                        <option value="">Select a label</option>
                        {labels.map((label) => (
                            <option key={label} value={label}>
                                {label}
                            </option>
                        ))}
                    </select>


                    {/* <label htmlFor="description">Description:</label>
                    <input onChange={handleChange} value={description} type="text" name="description" id="description" /> */}

                    <button>{toyToEdit._id ? 'Save' : 'Add'}</button>
                </form>

            </section>

        )
    )
}