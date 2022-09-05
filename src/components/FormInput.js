import React from 'react'
import { useField } from 'formik';

const FormInput = ({ label, clickedBtn, ...props }) => {
    const [field, meta] = useField(props);


    return (
        <>
            <div>
                <input
                    {...field}
                    {...props}
                    // className={ meta.touched && meta.error ? "input-error" : ""}
                    className={clickedBtn && meta.error ? "input-error" : ""}
                />
                {/* {clickedBtn && meta.error && <div className="error">{meta.error}</div>} */}
                {clickedBtn && meta.error ? <div className="error">{meta.error}</div> : <div className="error"></div>}
            </div>
        </>
    );
};
export default FormInput;