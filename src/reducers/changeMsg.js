import * as Types from './../constants/ActionType';
import * as Message from './../constants/Message';

const msgInitialState = Message.MSG_WELCOME;
const message = (state = msgInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MSG:
            return action.message
        default:
            return state
    }
}
export default message;
