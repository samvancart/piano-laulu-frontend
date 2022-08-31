import React from 'react'
import { useField } from 'formik';

const FormInputBox = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);

    return (
        <>
            <textarea className='input_box' {...props} />
        </>
    );
};
export default FormInputBox;