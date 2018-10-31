import * as Types from './../constants/ActionType';

const notifierInitialState = {
    displayNotifier: false
}
const notifier = (state = notifierInitialState, action) => {
    switch (action.type) {
        case Types.DISPLAY_NOTIFIER:
            return {...state, displayNotifier: true}
        case Types.DELETE_NOTIFIER:
            return {...state, displayNotifier: false}
    
        default:
            return state
    }
}
export default notifier;