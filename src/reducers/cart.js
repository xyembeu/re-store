import {
    BOOK_ADD_TO_CART,
    BOOK_REMOVE_FROM_CART,
    ALL_BOOKS_REMOVE_FROM_CART
} from '../actions/cart';

const initialState = {
    cartItems: []
};


const updateCartItem = (item = {}, quantity) => {
    const {id, title, price, count = 0, total = 0} = item;

    return {
        id,
        title,
        price,
        count: count + quantity,
        total: total + quantity * price
    }
};

const updateCartItems = (items, item, index) => {
    if (item.count === 0) {
        return [
            ...items.slice(0, index),
            ...items.slice(index + 1)
        ]
    }

    if (index === -1) {
        return [
            ...items,
            item
        ]
    }
    return [
        ...items.slice(0, index),
        item,
        ...items.slice(index + 1)
    ]
};

const updateOrder = (items, item, quantity) => {
    const currentItem = items.find(({id}) => id === item.id);
    const index = items.findIndex(({id}) => id === item.id);

    const newItem = updateCartItem({...item, ...currentItem}, quantity);

    return updateCartItems(items, newItem, index);
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOK_ADD_TO_CART:

            return {
                ...state,
                cartItems: updateOrder(state.cartItems, action.payload, +1)
            };

        case BOOK_REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:  updateOrder(state.cartItems, action.payload, -1)
            };

        case ALL_BOOKS_REMOVE_FROM_CART:
            const product = state.cartItems.find(({id}) => id === action.payload.id);
            return {
                ...state,
                cartItems: updateOrder(state.cartItems, action.payload, -product.count)
            };

        default:
            return state;
    }
};

