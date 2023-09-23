import { toyService } from "../../src/services/toy.service"

export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const TOY_UNDO = 'TOY_UNDO'
// export const SET_FILTER = 'SET_FILTER'

const intialState = {
    toys: [],
    lastToys: [],
};

export function toyReducer(state = intialState, action = {}) {
    let toys
    let lastToys

    switch (action.type) {

        case SET_TOYS:
            return { ...state, toys: action.toys }

        case REMOVE_TOY:
            lastToys = [...state.toys]
            toys = state.toys.filter(toy => toy._id !== action.toyId)
            console.log('toys:', toys)
            return { ...state, toys, lastToys }

        case TOY_UNDO:
            toys = [...state.lastToys]
            return { ...state, toys }

        case ADD_TOY:
            toys = [...state.toys, action.toy]
            return { ...state, toys }

        case UPDATE_TOY:
            toys = state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            return { ...state, toys }

        // case SET_FILTER:
        //     return { ...state, filterBy: action.filterBy }

        default:
            return state
    }
}