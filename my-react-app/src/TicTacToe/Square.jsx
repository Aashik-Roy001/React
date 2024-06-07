import React from 'react'

const Square = ({ value, onClick }) => {
    return (
        <div onClick={onClick} className="square">
            <h2>{value}</h2>
        </div>
    )
}

export default Square