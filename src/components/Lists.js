// 4. List Component: Construct a component to display a list of items.
import React from 'react';

export default function Lists() {
    const items = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return (
        <div>
            <ul>{items.map((item, i) => <Weeks item={item} key={i} />)}</ul>
        </div>
    )
}
function Weeks({ item }) {
    return (
        <li>{item}</li>
    )
}