import { useEffect, useState } from "react";


export default function useForm(initialValues, submitHandler) {
    const [values, setValues] = useState(initialValues);



    function onChange(e) {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
    }



    function onSubmit(e) {
        e.preventDefault();

        submitHandler(values);

    }




    return {
        values,
        onChange,
        onSubmit,
        setValues

    }
}


