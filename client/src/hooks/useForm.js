import { useState } from "react";


export function useForm(intialValues, submitCallback) {
    const [values, setValues] = useState(intialValues);


    function changeHandler(e) {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
    }


    function submitHandler(e) {
        e.preventDefaul();

        submitCallback(values);
    }

    return {
        values,
        changeHandler,
        submitHandler,

    }
}


