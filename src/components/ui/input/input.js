import React from 'react';

export const InputField = ({input, meta, ...props}) => {
    return (
        <input {...input} {...props}/>
    );
};
