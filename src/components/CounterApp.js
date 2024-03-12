// 2.Counter App: Build a counter application with buttons to increment and decrement the count.

import React, { useState } from 'react'

export default function CounterApp() {
    const [value, setValue] = useState(0)
    const style = { textAlign: "center" }
    function handleDecrement() {
        value > 0 ? setValue(value - 1) : setValue(value)
    }
    function handleIncrement() {
        setValue(value + 1)
    }
    return (
        <div style={style}>
            <h1>Counter-App</h1>
            <p>Value is:{value}</p>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={handleIncrement}>increment</button>
        </div>
    )
}
