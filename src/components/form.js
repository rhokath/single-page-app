import validate from '../hooks/inputValidationRules'
import useForm from '../hooks/useform'
import React from 'react'

const Form = () => {
    const {
        value,
        handleChange,
        handleSubmit,
        errors
    } = useForm(successCall, validate)
    function successCall(){
        console.log('No errors, submit callback called')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='todo'
            onChange={handleChange}
            value={value}
            required
            />
            {errors.inputLength && <p>{errors.inputLength}</p>}
            </form>
        </div>
    )
}

export default Form;