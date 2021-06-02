import React from 'react'
import EventEditor from '@Components/eventEditor'
import Season from '@Components/season'

export default function Edit() {
    return (
        <div className="view">
            <div className="view-row ">
                <EventEditor />
                <Season />
            </div>
        </div>
    )
}
