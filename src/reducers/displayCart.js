import * as Types from './../constants/ActionType'

const cartDisplayInitialState = {
    isCartDisplay: false
}
const cartDisplay = (state = cartDisplayInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_CART_STATUS:
            return {...state, isCartDisplay: !state.isCartDisplay}
        default:
            return state
    }
}
export default cartDisplay;