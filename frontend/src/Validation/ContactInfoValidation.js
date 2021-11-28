import * as yup from 'yup';

const contactInfoSchema = yup.object().shape({
    ContactName: yup.string().required(),
    Email: yup.string().email().required(),
    ContactNumber: yup.number().required()
});

export default contactInfoSchema;
