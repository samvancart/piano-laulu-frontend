import { Field, Form, Formik } from "formik";
import FormInput from "./FormInput";
import FormInputBox from "./FormInputBox";
import Button from "./Button";
import './CustomerInfoForm.css'

const CustomerInfoForm = () => {
    return (
        <Formik initialValues={{ name: "", Email:"", Phone:"", Info:"" }}>
            <Form>
                <h1>Yhteydenottolomake</h1>
                <FormInput
                    name="Name"
                    type="text"
                    placeholder="Nimi *"
                />
                <FormInput
                    name="Email"
                    type="text"
                    placeholder="Sähköposti *"
                />
                 <FormInput
                    name="Phone"
                    type="number"
                    placeholder="Puhelinnumero *"
                />
                <FormInputBox
                    name="Info"
                    type="text"
                    placeholder="Lisätiedot (esim. musiikkotoiveet yms.)"
                />
                <Button buttonStyle='btn--primary'>Lähetä</Button>
            </Form>
        </Formik>
    );
};

export default CustomerInfoForm;