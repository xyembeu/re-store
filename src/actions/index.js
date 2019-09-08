export const BOOKS_LOADED = 'BOOKS_LOADED';

export const bookLoaded = (newBooks) => {
    return {
        type: BOOKS_LOADED,
        payload: newBooks
    }
};