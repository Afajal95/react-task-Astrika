import React, { useState } from 'react'
import data from '../data/data'
import FoodItemList from './FoodItemList'

export default function FoodItems() {
    const [category, setCategory] = useState('')
    const [inStockFilter, setInStockFilter] = useState(false)

    const changeHandler = (e) => {
        setCategory(e.target.value)
    }

    const stockFilterChange = (e) => {
        setInStockFilter(e.target.checked)
    }

    return (
        <div>
            <select
                value={category}
                onChange={changeHandler}>
                {
                    data.map(d => <option key={d.category} value={d.category}>{d.category}</option>)
                }
            </select>
            <div>
                <input type="checkbox" value={inStockFilter} onChange={stockFilterChange}/>Show items only inStock items
            </div>
            <FoodItemList data={data} category={category} inStockFilter={inStockFilter} />
        </div>
    )
}
