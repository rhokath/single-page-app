//add a validate function that returns an errors object
export default function validate(value){
    let errors = {}
    if(value.length < 3){
        errors.inputLength = "Todo must be at least 3 characters long"
    }
    return errors
}