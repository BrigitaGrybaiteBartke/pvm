import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import Input from './Input';
import Options from './Options';

const Form = () => {

    const [percent, setPercent] = useState(21)
    const [bePvm, setBePvm] = useState(0)
    const [pvmSuma, setPvmSuma] = useState(0)
    const [bendraSuma, setBendraSuma] = useState(0)


    return (
        <>
            <div className='container d-flex'>
                <div className='form-control m-4'>
                    <div>
                        <h4 className='text-center mb-4 mt-2'>PVM skaiciuotuvas</h4>
                    </div>
                
                        <Options 
                        style= {{width: '200px'}}
                        onchange={(event) => {
                            const percent = +event.target.value
                            setPercent(percent)
                            setBendraSuma((bePvm + ((bePvm/100) * percent)).toFixed(1))
                        }}
                        />

                        <Input
                        labelText = {'Suma (be PVM)'}
                        style= {{width: '200px'}}
                        value = { bePvm }
                        onchange = { (event) => {
                        const bepvm = +event.target.value
                            setBePvm(bepvm)
                            setBendraSuma((bePvm + ((bePvm/100) * percent)).toFixed(1))
                        }}
                        />

                        <Input
                        labelText = {'PVM suma'}
                        style= {{width: '200px'}}
                        disabled = {true}
                        value = { parseFloat((bePvm/100) * percent).toFixed(1) }
                        />

                        <Input
                        labelText = {'Bendra suma (su PVM)'}
                        style= {{width: '200px'}}
                        value = {bendraSuma}
                        onchange = {(event) => {
                            const bendra = +event.target.value
                            setBendraSuma(bendra)
                            setBePvm((parseFloat(bendra - ((bePvm/100) * percent))).toFixed(1))
                        }}
                        />
                </div>
            </div>
        </>
    );
};

export default Form;