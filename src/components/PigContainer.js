import React from 'react'
import PigTile from './PigTile'

function PigContainer({ hogs, showGreased, sortByWeight, nameSearch }) {
    const greasedHogs = hogs.filter(hog => {
        if (!showGreased) {
            return true
        } else {
            if (hog.greased) return true
        }
    })

    const hogNames = greasedHogs.filter(hog => {
        if (!nameSearch) return true
        return hog.name.toLowerCase().includes(nameSearch.toLowerCase())
    })

    let sortedByWeight = []
    let weight = 0
    let rounds = hogNames.length

    if (sortByWeight === "Sort By Weight") {
        sortedByWeight = [...hogNames]
    } else {
        for (let j = 0; j < rounds; j++) {
            let index = 0
            for (let i = 0; i < hogNames.length; i++) {
                if (hogNames[i].weight > weight) {
                    weight = hogNames[i].weight
                    index = i
                }
            }
            if (sortByWeight === "Sorted (Desc)") {
                sortedByWeight.push(hogNames[index])
            } else {
                sortedByWeight.unshift(hogNames[index])
            }
            hogNames.splice(index, 1)
            weight = 0
        }
    }

    const hogsToDisplay = sortedByWeight.map(hog => {
        return <PigTile key={hog.name} hog={hog} />
    })

    return (
        <div className='ui grid container'>
            {hogsToDisplay}
        </div>
    )
}

export default PigContainer