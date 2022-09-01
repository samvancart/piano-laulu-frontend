import * as yup from 'yup';

export const CustomerInfoSchema = yup.object().shape({
    name: yup
        .string("please enter your name")
        .required(),
    phone: yup
        .number("please enter a valid phone number")
        .required(),
    email: yup
        .string()
        .email("please enter a valid email")
        .required(),
    info: yup
        .mixed()
        .required(),
});