import validate from '../hooks/inputValidationRules'

const Form = () => {
    const {
        value,
        handleChange,
        handleSubmit,
    } = useForm(successCall, validate)
    function successCall(){
        console.log('No errors, submit callback called')
    }
    return(
        <div>
            <input 
            type='text'
            name='todo'
            onChange={handleChange}
            value={value}
            required
            />
            {errors.inputLength && <p>{errors.inputLength}</p>}
        </div>
    )
}