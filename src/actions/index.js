import * as Types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeCartStatus = () => {
    return {
        type: Types.CHANGE_CART_STATUS
    }
}
export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MSG,
        message
    }
}
export const actDisplayNotifier = () => {
    return {
        type: Types.DISPLAY_NOTIFIER
    }
}
export const actDeleteNotifier = () => {
    return {
        type: Types.DELETE_NOTIFIER
    }
}
export const actDeleteProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}