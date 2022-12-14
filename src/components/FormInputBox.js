import React from 'react'
import { useField } from 'formik';

const FormInputBox = ({ label, clickedBtn, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <textarea
                // onChange={whenChanged}
                {...field}
                {...props}
            // className={meta.touched && meta.error ? "input-box-error" : ""}
            />
            {clickedBtn && meta.error ? <div className="error">{meta.error}</div> : <div className="error"></div>}
        </>
    );
};
export default FormInputBox;