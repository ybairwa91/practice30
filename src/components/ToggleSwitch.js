// 5. Toggle Switch: Implement a basic toggle switch component that changes its state when clicked.
import React, { useState } from 'react'

function ToggleSwitch() {
    const style = {
        width: '500px',
        height: "50px",

    }
    const [change, setChange] = useState("change")
    function handleClick() {
        setChange(change => !change);

    }
    return (
        <>
            <input style={style} type='checkbox' onClick={handleClick} />
            <p>state is: {change ? "change" : "setChange"}</p>
        </>

    )
}

export default ToggleSwitch