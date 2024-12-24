import React from "react"
import Decision from "./Decision"

function App() {
    /**
     * Challenge: figure out what to do with `render`
     */
    return (
        <div>
            <Decision>
                {(goingOut) => {
                    return (
                        <h1>Are we going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
                    )
                }}
            </Decision>
        </div>
    )
}

export default App