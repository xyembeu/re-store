import includes from "lodash.includes";

export const filterData = (data, filter) => {
    if (!data.length) {
        return [];
    }

    return data.filter(item => {
        return Object.keys(filter).every(key => {
            return includes(item[key].toString().toLowerCase(), filter[key].toLowerCase());
        });
    });
};
