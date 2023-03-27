import React from 'react'

function SortAndFilter({ showGreased, toggleGreased, searchName, nameSearch, changeWeightSort, sortByWeight }) {

    return (
        <div className='newWrapper'>
            <h2>Sort and Filter</h2>
            <button onClick={toggleGreased}>{showGreased ? "Show All" : "Show Greased"}</button>
            <button onClick={changeWeightSort}>{sortByWeight}</button>
            <label>Search Names:  <input value={nameSearch} onChange={searchName} type="text" /></label>
        </div>
    )
}

export default SortAndFilter