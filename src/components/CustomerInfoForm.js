import { Form, Formik } from "formik";
import FormInput from "./FormInput";
import FormInputBox from "./FormInputBox";
import { CustomerInfoSchema } from "../schemas/CustomerInfoSchema"
import './CustomerInfoForm.css'

const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    actions.validateForm();
    console.log('values: ', values);
    console.log('actions: ', actions);

};




const CustomerInfoForm = () => {
    return (
        <Formik
            initialValues={{ name: "", email: "", phone: "", info: "" }}
            validationSchema={CustomerInfoSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <h1>Yhteydenottolomake</h1>
                    <FormInput
                        name="name"
                        type="text"
                        placeholder="Nimi *"
                    />
                    <FormInput
                        name="email"
                        type="text"
                        placeholder="Sähköposti *"
                    />
                    <FormInput
                        name="phone"
                        type="number"
                        placeholder="Puhelinnumero *"
                    />
                    <FormInputBox
                        name="info"
                        type="text"
                        placeholder="Lisätiedot (esim. musiikkotoiveet yms.) *"
                    />
                    <button
                        className="btn--primary"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        Lähetä
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomerInfoForm;