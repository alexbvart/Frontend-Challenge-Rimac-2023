import * as yup from 'yup';

export const schema = yup
  .object({

    dni: yup
        .string()
        .required('DNI es requerido')
        .max(8, 'DNI debe ser máximo de 8 caracteres')
        .min(8, 'DNI debe tener 8 caracteres')
        .matches(
            /^\d{8}$/,
            'DNI debe tener 8 caracteres'
        ),
        
    cellPhone:yup
        .string()
        .required('Celular es requerido')
        .max(9, 'Celular debe tener máximo 9 caracteres')
        .min(9, 'Celular debe tener 9 caracteres')
        .matches(
            /^\d{9}$/,
            'Celular debe tener 8 caracteres'
        ),
        
    acceptTerms: yup
        .bool()
        .required("Acepte los termino para continuar")
        .oneOf([true]),

    acceptPolitic: yup
        .bool()
        .required("Acepte los termino para continuar")
        .oneOf([true])
  })
  .required();