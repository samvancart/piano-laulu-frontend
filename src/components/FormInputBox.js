import React from 'react'
import { useField } from 'formik';

const FormInputBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    // console.log("field: ", field);
    // console.log("meta: ", meta);
    return (
        <>
            <textarea
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-box-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default FormInputBox;