import React from 'react';

export const SubmitButton = ({ text, onClick, disabled }) => {
    return (
        <>
            <button 
                onClick={onClick}
                disabled={disabled}
            >{text}</button>
        </>
    );
};