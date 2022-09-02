import React from 'react'
import { useField } from 'formik';

const FormInputBox = ({ label, clickedBtn, isTouched, ...props }) => {
    const [field, meta] = useField(props);
    // console.log("field: ", field);
    // console.log("meta: ", meta);
    console.log(clickedBtn);
    return (
        <>
            <textarea
                {...field}
                {...props}
            // className={meta.touched && meta.error ? "input-box-error" : ""}

            />
            {clickedBtn && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default FormInputBox;