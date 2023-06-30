import React from 'react'

function SubmitButton({ text, id }) {
    return (
        <div >
            <button className='btn' id={id}> {text} </button>
        </div>
    )
}

export default SubmitButton