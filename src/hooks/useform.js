//create custom hook to hanlde input validation
//referencing the upmostly.com tutorial
import React,{useState, useEffect} from 'react';
//need to hook up state
import {useDispatch} from 'react-redux';
import {addTodo} from '../actions/index'
const useForm = (callback, validate) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    useEffect(()=> {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback()
            dispatch(addTodo(value))
            setValue('')
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

