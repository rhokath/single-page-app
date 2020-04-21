//create custom hook to hanlde input validation
//referencing the upmostly.com tutorial
import validate from './inputValidationRules'
import {useState, useEffect} from 'react';
const useForm = (callback, validate) => {
    const [value, setValue] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    useEffect(()=> {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
        }
    }, [errors])
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(value))
        setIsSubmitting(true)
    }
    const handleChange = (event) => {
        event.persist()
        setValue(event.target.value)
    }
    return{
        handleChange,
        handleSubmit,
        value,
        errors
    }
}
export default useForm;

