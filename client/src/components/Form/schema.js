import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  number: yup
    .string()
    .min(8, 'Must be exactly 6 digits')
    .max(8, 'Must be exactly 6 digits')
    .required(),
});
