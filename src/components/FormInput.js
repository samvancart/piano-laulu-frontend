import React from 'react'
import { useField } from 'formik';

const FormInput = ({ label, ...props }) => {
    const [field, meta, helper, actions] = useField(props);
    // console.log("field: ", field);
    // console.log("meta: ", meta);
    // console.log("helper: ", helper);

    return (
        <>
            <input
                {...field}
                {...props}
                // className={ meta.touched && meta.error ? "input-error" : ""}
                className={ meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default FormInput;