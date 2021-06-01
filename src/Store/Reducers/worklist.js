import { work } from '../Actions/Types'

const initialState = []

export default function worklist(state = initialState, action) {
    switch (action.type) {
        case work.ADD_TASK:
            return [...state, action.payload]
        default:
            return state
    }
}
