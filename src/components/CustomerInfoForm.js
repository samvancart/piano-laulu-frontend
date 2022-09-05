import { Form, Formik } from "formik";
import FormInput from "./FormInput";
import FormInputBox from "./FormInputBox";
import { CustomerInfoSchema } from "../schemas/CustomerInfoSchema"
import './CustomerInfoForm.css'
import { useState } from "react";
import axios from 'axios';


const CustomerInfoForm = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        setClickedBtn(false);
        // actions.validateForm();
        console.log('values: ', values);
        // console.log('actions: ', actions);

        axios
            .post('http://localhost:8000/api/send', values)
            .then(response => {
                console.log(response);
            });
    };




    const [clickedBtn, setClickedBtn] = useState(false);

    const wasClickedBtn = () => setClickedBtn(true);
    // const isClickedBtn = () => setClickedBtn(false);

    // const onClick = (e) => {
    //     console.log('clicked',e);
    //     isClickedBtn();  
    // }

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
                        clickedBtn={clickedBtn}
                    />
                    <FormInput
                        name="email"
                        type="text"
                        placeholder="Sähköposti *"
                        clickedBtn={clickedBtn}
                    />
                    <FormInput
                        name="phone"
                        type="number"
                        placeholder="Puhelinnumero *"
                        clickedBtn={clickedBtn}
                    />
                    <FormInputBox
                        name="info"
                        type="text"
                        placeholder="Lisätiedot (esim. musiikkotoiveet yms.) *"
                        clickedBtn={clickedBtn}
                    // onClick={onClick}
                    />
                    <button
                        className="btn--primary"
                        disabled={isSubmitting}
                        type="submit"
                        onClick={wasClickedBtn}

                    >
                        Lähetä
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomerInfoForm;