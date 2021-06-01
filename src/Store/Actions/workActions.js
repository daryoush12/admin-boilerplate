import { work } from './Types/'

export function newTask(task) {
    return {
        type: work.ADD_TASK,
        payload: task,
    }
}
