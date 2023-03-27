import React, { useState } from 'react'
import HogInfo from './HogInfo'

function PigTile({ hog }) {
    const [displayInfo, setDisplayInfo] = useState(false)

    function handleClick() {
        setDisplayInfo(!displayInfo)
    }

    return (
        <div className="ui eight wide column">
            <div className='pigTile'>
                <img
                    onClick={handleClick}
                    src={hog.image}
                    alt={`Picture of ${hog.name}`}
                />
                <h2>{hog.name}</h2>
                {displayInfo ? <HogInfo hog={hog} /> : null}
            </div>
        </div>
    )
}

export default PigTile