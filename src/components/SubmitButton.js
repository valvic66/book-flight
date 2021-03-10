import React from 'react';

export const SubmitButton = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    );
};