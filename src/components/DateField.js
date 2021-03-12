import React from 'react';
import './DateField.css';

export const DateField = ({ date, labelName, onChange, disabled, isValidDate }) => {
    return (
        <>
            <input
                className={'date-input ' + (!isValidDate && 'show-error')}
                id='date-field'
                name='date-field'
                type='text'
                value={date}
                size={8}
                onChange={onChange}
                disabled={disabled}
            />
            <label htmlFor='date-field' className=''>{labelName}</label>
        </>
    );
};