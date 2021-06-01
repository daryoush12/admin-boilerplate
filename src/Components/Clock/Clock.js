import React, { useState } from 'react'

export default function Clock() {
    const [count, setCount] = useState(0)

    const Increase = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={Increase}>Increase</button>
        </div>
    )
}
