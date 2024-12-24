import React from "react"
import Decision from "./Decision"

function App() {
    /**
     * Challenge: figure out what to do with `render`
     */
    return (
        <div>
            <Decision render={
                (goingOut) => {
                    return (
                        <h1>Are we going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
                    )
                }} />
        </div>
    )
}

export default App