import {createSelector} from "reselect";
import queryString from 'query-string';
import {filterData} from "../utils/filterData";


export const productsSelector = (state) => {
    return state.books.products;
};

export const filterSelector = (state, props) => {
    return props.history.location.search
};

export const productsReSelector = createSelector(
    [productsSelector],
    (products) => {
        return products
    }
);
