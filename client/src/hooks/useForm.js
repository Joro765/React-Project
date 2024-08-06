import { useState } from "react";


export default function useForm(initialValues, submitHandler, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState(null);



    function onChange(e) {
        setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));

        if (validate) {
            const validationErrors = validate({
                ...values,
                [e.target.name]: e.target.value
            });
            setErrors(validationErrors);
        }
    }



    async function onSubmit(e) {
        e.preventDefault();

        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                await submitHandler(values);
            } catch (error) {
                setSubmitError(error);
            }
        }


    }


    return {
        values,
        errors,
        submitError,
        onChange,
        onSubmit,
        setValues

    }
}


