import * as yup from 'yup';

const passwordSchema = yup.object().shape({
    email: yup.string().email().required()
});

export default passwordSchema;
