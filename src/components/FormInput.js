import React from 'react'
import { useField } from 'formik';

const FormInput = ({ label, clickedBtn, isTouched, ...props }) => {
    const [field, meta, helper, actions] = useField(props);
    // console.log("field: ", field);
    // console.log("meta: ", meta);
    // console.log("helper: ", helper);
    console.log('isTouched: ', isTouched);

    return (
        <>
            <input
                {...field}
                {...props}
                // className={ meta.touched && meta.error ? "input-error" : ""}
                className={clickedBtn && meta.error ? "input-error" : ""}
            />
            {clickedBtn && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};
export default FormInput;