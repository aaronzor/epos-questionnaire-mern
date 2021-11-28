import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(20).required(),
    signUpCode: yup
        .string()
        .matches(process.env.REACT_APP_SIGNUP_CODE)
        .required()
});

export default signUpSchema;
