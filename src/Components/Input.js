import React from 'react';

const Input = ({labelText, onChange, value, style, name}) => {
    return (
        <>
       
            <div className='d-flex justify-content-start align-items-center mb-3'>
                <label style={style}>{labelText}</label>
                <input style={style} name={name} className='form-control' type='text' onChange={onChange} value={value}/>
            </div>
       
        </>
    );
};



export default Input;