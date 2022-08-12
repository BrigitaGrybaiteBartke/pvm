import React from 'react';

const Option = ({style, styleSelect, onchange}) => {
    return (
        <>
            <div className='d-flex justify-content-start align-items-center mb-3'>
                <label style={style}>PVM tarifas</label>
                    
                <select style={styleSelect} className='form-select'onChange={onchange} >
                    <option value='0.21'>21%</option>
                    <option value='0.09'>9%</option>
                    <option value='0.05'>5%</option>
                </select>
            </div>
        </>
    );
};


export default Option;