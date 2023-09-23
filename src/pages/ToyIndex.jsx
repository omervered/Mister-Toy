import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate, Link } from "react-router-dom"
// import { toyService } from "../services/toy.service"
import { ToyList } from "../cmps/ToyList"
import { SET_TOYS } from "../../store/reducers/toy.reducer"
import { loadToys, removeToyOptimistic, saveToy } from "../../store/actions/toy.actions"
import { toyService } from "../services/toy.service"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { ToyFilter } from "../cmps/ToyFilter"
// import { ToySort } from "../cmps/ToySort"



export function ToyIndex() {
    const navigate = useNavigate()
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const [filterBy, setFilterBy] = useState(toyService.getDefaultFilterBy())
    // const [sort, setSort] = useState(toyService.getDefaultSort())
    console.log('filterBy:', filterBy)

    useEffect(() => {
        loadToys(filterBy)
            .catch(err => {
                console.log('err:', err)
            })
    }, [filterBy])

    // console.log('re rendered')

    function onRemoveToy(toyId) {
        // removeToy(toyId)
        removeToyOptimistic(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                // console.log('Cannot remove toy', err)
                showErrorMsg('Cannot remove toy')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        if (field === 'inStock') {
            if (value === 'true') value = true;
            else if (value === 'false') value = false;
            else value = '';
        }
        if (target.type === 'checkbox') value = target.checked
        if (target.type === 'select-multiple') value = Array.from(target.selectedOptions, (option) => option.value)
        setFilterBy({ ...filterBy, [field]: value })
    }

    // function onSetSort(sort) {
    //     setSort(sort)
    // }

    function onAddToy() {
        const toyToSave = toyService.getEmptyToy()
        saveToy(toyToSave)
            .then(savedToy => {
                showSuccessMsg(`Toy added (id: ${savedToy._id})`)
            })
            .catch(err => {
                console.log('Cannot add toy', err)
                showErrorMsg('Cannot add toy')
            })
    }

    function onEditToy(toy) {
        const price = +prompt('New price?', toy.price)
        const toyToSave = { ...toy, price }
        saveToy(toyToSave)
            .then(savedToy => {
                // showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
            })
            .catch(err => {
                console.log('Cannot update toy', err)
                // showErrorMsg('Cannot update toy')
            })
    }


    return (
        <section>
            <ToyList
                toys={toys}
                onRemoveToy={onRemoveToy}
                onEditToy={onEditToy}
            />
            <ToyFilter filterBy={filterBy} handleChange={handleChange} />
            {/* <ToySort sort={sort} onSetSort={onSetSort} /> */}
            <button onClick={() => navigate('/toy/edit')}>Add Toy</button>
        </section >
    )
}