export const BOOK_ADD_TO_CART = 'BOOK_ADD_TO_CART';
export const BOOK_REMOVE_FROM_CART = 'BOOK_REMOVE_FROM_CART';
export const ALL_BOOKS_REMOVE_FROM_CART = 'ALL_BOOKS_REMOVE_FROM_CART';


export const bookAddToCart = (data) => {
    return {type: BOOK_ADD_TO_CART, payload: data};
};

export const bookRemoveFromCart = (data) => {
    return {type: BOOK_REMOVE_FROM_CART, payload: data};
};

export const allBooksRemoveFromCart = (data) => {
    return {type: ALL_BOOKS_REMOVE_FROM_CART, payload: data};
};
