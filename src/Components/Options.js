import React from 'react';

const Options = ({onchange, style}) => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center mb-2'>
                <label style={style}>PMV tarifas</label>
                <select style={style} onChange={onchange}>
                    <option value='21'>21&#37;</option>
                    <option value='9'>9&#37;</option>
                    <option value='5'>5&#37;</option>
                </select>
            </div>
        </>
    );
};

export default Options;