import { toyService } from "../../src/services/toy.service.js"
import { ADD_TOY, REMOVE_TOY, SET_TOYS, TOY_UNDO, UPDATE_TOY } from "../reducers/toy.reducer";
import { store } from "../store";


export function loadToys(filterBy) {
    // const { filterBy } = store.getState().toyModule
    // console.log('filterByfromaction', filterBy)
    return toyService.query(filterBy)
        .then(toys => {
            // console.log('toysfromquery:', toys)
            store.dispatch({ type: SET_TOYS, toys })
        })
        .catch(err => {
            // console.log('toy action -> Cannot load toys', err)
            throw err
        })
}

// export function loadToys() {
//     const { filterBy } = store.getState().toyModule
//     // console.log('filterBy', filterBy)
//     return toyService.query(filterBy)
//         .then(toys => {
//             store.dispatch({ type: SET_TOYS, toys })
//         })
//         .catch(err => {
//             console.log('toy action -> Cannot load toys', err)
//             throw err
//         })
// }

export function removeToyOptimistic(toyId) {
    console.log('toyId:', toyId)
    store.dispatch({ type: REMOVE_TOY, toyId })
    return toyService.remove(toyId)
        .catch(err => {
            store.dispatch({ type: TOY_UNDO })
            console.log('Cannot remove Toy', err)
            throw err
        })
}
export function saveToy(toy) {
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy)
        .then(toyToSave => {
            store.dispatch({ type, toy: toyToSave })
            return toyToSave
        })
        .catch(err => {
            console.log('toy action -> Cannot save toy', err)
            throw err
        })
}
