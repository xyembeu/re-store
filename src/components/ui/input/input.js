import React from 'react';

export const InputField = ({field, form, ...props}) => {
    return (
        <input {...field} {...form}/>
    );
};
