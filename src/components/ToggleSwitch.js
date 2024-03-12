// 5. Toggle Switch: Implement a basic toggle switch component that changes its state when clicked.
import React, { useState } from 'react'

function ToggleSwitch() {
    const style = {
        width: '500px',
        height: "50px",

    }
    const [isToggled, setIsToggled] = useState(false)
    function handleClick() {
        setIsToggled(change => !change);

    }

    return (
        <>
            <input style={style} type='checkbox' onClick={handleClick} />
            <p>state is: {isToggled ? "isToggled" : "setIsToggled"}</p>
            <p>{isToggled ? 'on' : 'off'}</p>
        </>

    )
}

export default ToggleSwitch