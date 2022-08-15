import React from 'react';

const Input = ({labelText, onchange, value, style, disabled}) => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mb-2'>
                <label style={style}>{ labelText }</label>
                <input
                    disabled={disabled}
                    style={style} 
                    type="number" 
                    onChange={onchange}
                    value={value}
                />
            </div>
        </>
    );
}

export default Input;