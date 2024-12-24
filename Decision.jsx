import React from "react"

export default function Decision({ render }) {
    const [goingOut, setGoingOut] = React.useState(false)

    console.log(render(goingOut));

    function toggleGoingOut() {
        setGoingOut(prev => !prev)
    }

    return (
        <div>
            <button onClick={toggleGoingOut}>Change mind</button>
            {render(goingOut)}
        </div>
    )
}