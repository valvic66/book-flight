import React from 'react';

export const DateField = ({ date, labelName, onChange }) => {
    return (
        <>
            <input
                type='date-field'
                id='date-field'
                name='date-field'
                value={date}
                size={4}
                onChange={onChange}
            />
            <label htmlFor='date-field' className=''>{labelName}</label>
        </>
    );
};