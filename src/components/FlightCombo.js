import React from 'react';

export const FlightCombo = ({ options = [], onChange, value }) => {
    const getOptions = () => {
        return options && options.map((option, key) => {
            return <option value={option}>{option}</option>
        });
    };

    return (
        <>
            <label htmlFor='flights'>Flight Combo</label>
            <select
                id='flights'
                value={value}
                onChange={(event) => onChange(event)}
            >
                {getOptions()}
            </select>
        </>
    );
};