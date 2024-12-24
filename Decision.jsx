import React from "react"

export default function Decision({ name }) {
    const [goingOut, setGoingOut] = React.useState(false)

    name(goingOut)

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            <h1>Are we going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
        </div>
    )
}