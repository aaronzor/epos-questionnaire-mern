import * as yup from 'yup';

const contactInfoSchema = yup.object().shape({
    contactName: yup.string().required(),
    email: yup.string().email().required(),
    contactNumber: yup.number().required()
});

export default contactInfoSchema;
