import React from 'react';

export const FlightCombo = ({ options = [], onChange }) => {
    const getOptions = () => {
        return options && options.map((option, key) => {
            return <option value={option}>{option}</option>
        });
    };

    return (
        <>
            <label htmlFor='flights'>Flight Combo</label>
            <select id='flights' onChange={(event) => onChange(event)}>
                {getOptions()}
            </select>
        </>
    );
};