import React, { useState } from 'react';
import Input from './Input';
import Option from './Option';

const Form = () => {

    const [percent, setPercent] = useState(0.21)
    
    const [amount, setAmount] = useState(0) 
    const [pvm, setPvm] = useState(0) 
    const [sum, setSum] = useState(0)
    
    const vatAmount = (sum - amount).toFixed(2)
   
    return (
        <div className='container d-flex'>
            <div className='form-control m-4'>
                <div>
                    <h4 className='text-center mb-4 mt-2'>PVM skaiciuotuvas</h4>
                </div>
            
                <Option 
                style= {{width: '200px'}}
                styleSelect= {{width: '80px'}}
                onchange = {(event) => {
                    const percent = parseFloat(event.target.value)
                    setPercent(percent)
                    setSum((amount * (1 + percent)))
                }}   
                />

                <Input 
                labelText = {'Suma (be PVM)'}
                name = {'be-pvm'}
                style= {{width: '200px'}}
                value = {amount}
                onChange = {(event) => {
                    setAmount(+event.target.value)
                    setSum((parseFloat(event.target.value) * (1 + percent)))            
                }}
                 />

                <Input 
                labelText = {'PVM suma'}
                name= {'pvm'}
                style= {{width: '200px'}}
                value = {vatAmount}
                />  
                
                <Input 
                labelText = {'Bendra suma (su PVM))'}
                name = {'bendra-suma'}
                style= {{width: '200px'}}
                value = {sum}
                onChange = {(event) => {
                       setSum(+event.target.value)
                       const amount = (parseFloat(event.target.value) * (1.0 - percent)).toFixed(2)
                       setAmount(amount)
                    }}
                />
            </div>
        </div>
        
    ) }

export default Form;
