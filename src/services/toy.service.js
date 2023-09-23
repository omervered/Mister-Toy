
// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'
const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilterBy,
    getLabels
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: '',
        labels: [],
        createdAt: Date.now(),
        inStock: true
    }
}

function getLabels() {
    return labels
}

function getDefaultFilterBy() {
    return {
        search: '',
        minPrice: 0,
        maxPrice: Infinity,
        // labels: [],
        inStock: null
    }
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))

























































// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'

// const STORAGE_KEY = 'toyDB'
// _createToys()

// export const toyService = {
//     query,
//     getById,
//     save,
//     remove,
//     getEmptyToy,
//     getLabels,
//     getDefaultFilterBy,
//     // getDefaultSort,

// }

// function query(filterBy = {}) {
//     return storageService.query(STORAGE_KEY)
//         .then(toys => {
//             if (filterBy.search) {
//                 // console.log('filterBy from toy service:', filterBy)
//                 const regExp = new RegExp(filterBy.search, 'i')
//                 toys = toys.filter(toy => regExp.test(toy.name))
//                 // console.log('toys after filter regexp:', toys)
//             }
//             if (filterBy.minPrice) {
//                 toys = toys.filter(toy => toy.price >= filterBy.minPrice)
//             }
//             if (filterBy.maxPrice) {
//                 toys = toys.filter(toy => toy.price <= filterBy.maxPrice)
//             }
//             if (filterBy.inStock === true) {
//                 toys = toys.filter(toy => toy.inStock === true);
//             } else if (filterBy.inStock === false) {
//                 toys = toys.filter(toy => toy.inStock === false);
//             }

//             // if (sortBy === 'noSort') {
//             //     toys = toys

//             // } else if (sortBy === 'firstName') {
//             //     toys = toys.sort((toy1, toy2) => {
//             //         return toy1.firstName.localeCompare(toy2.firstName);
//             //     })

//             // } else if (sortBy === 'LastName') {
//             //     toys = toys.sort((toy1, toy2) => {
//             //         return toy1.LastName.localeCompare(toy2.LastName);
//             //     })
//             // }
//             return toys
//         })
// }

// function getById(toyId) {
//     return storageService.get(STORAGE_KEY, toyId)
// }

// function remove(toyId) {
//     return storageService.remove(STORAGE_KEY, toyId)
// }

// function save(toy) {
//     if (toy._id) {
//         return storageService.put(STORAGE_KEY, toy)
//     } else {

//         return storageService.post(STORAGE_KEY, toy)
//     }
// }

// function getEmptyToy() {
//     return {
//         _id: '',
//         name: '',
//         price: '',
//         labels: [],
//         createdAt: Date.now(),
//         inStock: true
//     }
// }
// const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

// function getLabels() {
//     return labels
// }

// function getDefaultFilterBy() {
//     return {
//         search: '',
//         minPrice: 0,
//         maxPrice: Infinity,
//         // labels: [],
//         inStock: null
//     }
// }

// function getDefaultSort() {
//     return {
//         // 
//         by: 'name',
//         asc: true
//     }
// }


// function _createToys() {
//     let toys = utilService.loadFromStorage(STORAGE_KEY)
//     if (!toys || !toys.length)
//         toys = [
//             {
//                 _id: utilService.makeId(),
//                 name: 'Talking Doll',
//                 price: 150,
//                 labels: ['Doll', 'Battery Powered', 'Baby'], createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'Monopoly',
//                 price: 140,
//                 labels: ['Box game'], createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'Backgammon',
//                 price: 12,
//                 labels: ['Box game'], createdAt: 1631031801011,
//                 inStock: true,
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'Barbi',
//                 price: 133,
//                 labels: ['Doll', 'Baby'], createdAt: 1631031801011,
//                 inStock: false,
//             },
//             {
//                 _id: utilService.makeId(),
//                 name: 'Space 1000pcs puzzle',
//                 price: 113,
//                 labels: ['puzzle'], createdAt: 1631031801011,
//                 inStock: false,
//             },

//         ]
//     utilService.saveToStorage(STORAGE_KEY, toys)
// }