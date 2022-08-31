import React from 'react'
import { useField } from 'formik';

const FormInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <>
            {/* <label>{label}</label> */}
            <input {...props} />
        </>
    );
};
export default FormInput;