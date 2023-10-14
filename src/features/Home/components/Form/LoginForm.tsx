import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { schema } from './schemas/login-form-schema'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import { InputsForLogin } from '../../../../models/input-model'
// import { useUserStore } from '../../../../store/userStore'
import { useNavigate } from "react-router-dom";
import { PLAN_PATH } from '../../../../routes/routesPath'
import { Checkbox } from '@nextui-org/react'
import Typography from '../../../../components/Typography'
import { useUserStore } from '../../../../store/userStore'

export const LoginForm = () => {

    const [setDni,setCellphone] = useUserStore(state => [state.setDni,state.setCellphone])
    const navigate = useNavigate();

    const formMethods  = useForm({
        defaultValues: {
            dni: '',
            cellPhone: '',
            acceptTerms: true,
            acceptPolitic: true
        },
        mode: "onChange",
        resolver: yupResolver(schema)
    })

    const {
        register, 
        handleSubmit, 
        // watch, 
        formState : {isDirty, isValid},//,errors}, 
        reset
    } = formMethods;


    const onSubmit: SubmitHandler<InputsForLogin> = async (data) => {

        if (data) {
            const {dni, cellPhone} = data

            dni && setDni(data.dni)
            cellPhone && setCellphone(data.cellPhone)
            
        }
        navigate(PLAN_PATH);
        reset();
    }
 

    return (
        <>
            <div className='flex flex-col py-4 gap-6'>
                
                <FormProvider { ...formMethods} >
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

                        <Input name='dni'  label='DNI' required={true} type='number' />
                        
                        <Input name='cellPhone'  label='Celular' required={true} type='number'/>

                        <Checkbox  color="primary"    radius="sm" isRequired {...register('acceptTerms')} >
                            <Typography.Small>Acepto la Política de Privacidad</Typography.Small>
                        </Checkbox>

                        <Checkbox  color="primary"  radius="sm" isRequired {...register('acceptPolitic')}>
                            <Typography.Small>Acepto la Política Comunicaciones Comerciales</Typography.Small>
                        </Checkbox>

                        <Typography.Xs className='underline font-semibold'>Aplican Términos y Condiciones.</Typography.Xs>

                        <Button type="submit" isDirty={isDirty} isValid={isValid} className='rounded-3xl'> COTÍZALO </Button>

                    </form>
                </FormProvider>
            </div>

        </>
    )
}
