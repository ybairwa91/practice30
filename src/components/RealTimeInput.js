// 3. Real-time Input: Create a form that captures user input and displays it in real-time as the user types.
import React, { useState } from 'react'

function RealTimeInput() {
    const [typed, setTyped] = useState('')
    const style = { textAlign: 'center' }

    function handleSubmit(e) {
        e.preventDefault();

    }
    return (
        <div style={style}>

            <div >RealTimeInput</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='input'>Your Input:   </label>
                <input type='text' id='input' value={typed} onChange={e => setTyped(e.target.value)} />
                <div>
                    <h3>You type:</h3>
                    <p>{typed}</p>
                </div>
            </form>
        </div>

    )
}

export default RealTimeInput