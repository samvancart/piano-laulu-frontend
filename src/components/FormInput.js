import React from 'react'
import { useField } from 'formik';

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    console.log("field: ", field);
    console.log("meta: ", meta);

    return (
        <>
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default FormInput;