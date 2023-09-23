import React from 'react'
import { toyService } from '../services/toy.service'

const toyLabel = toyService.getLabels()

export function ToyFilter({ handleChange, filterBy }) {

    return <div className="filter-container">
        <form className={'form-filter'}>
            <label className='filter-label'>
                <span className='filter-label'>Search</span>
                <input
                    value={filterBy.search}
                    onChange={handleChange}
                    type="search"
                    className="search-input"
                    name="search" />
            </label>
            <label className='filter-label'>
                <span className='filter-label'>Min-price</span>
                <input
                    onChange={handleChange}
                    type="number"
                    className="min-price"
                    name="minPrice" />
            </label>
            <label className='filter-label'>
                <span className='filter-label'>Max-price</span>
                <input
                    onChange={handleChange}
                    type="number"
                    className="max-price"
                    name="maxPrice" />
            </label>
            {/* <label className='filter-label'>
                <span className='filter-label'>Filter By</span>
                <select
                    onChange={handleChange}
                    name="labels"
                    multiple
                    value={filterBy.labels || []}>
                    <option value=""> All </option>
                    <>
                        {toyLabel.map(label => <option key={label} value={label}>{label}</option>)}
                    </>
                </select>
            </label> */}

            <label className='filter-label'>
                <span className='filter-label'>In stock</span>
                <select
                    onChange={handleChange}
                    name="inStock"
                    value={filterBy.inStock || ''}>
                    <option value=""> All </option>
                    <option value={true}>In stock</option>
                    <option value={false}>Out of stock</option>
                </select>
            </label>
        </form>
    </div>
}

