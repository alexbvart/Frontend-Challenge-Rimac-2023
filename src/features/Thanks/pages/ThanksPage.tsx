// import { useUserStore } from '../../../store/userStore'
import CustomCard from '../../../components/Card';
import CheckIcon from '../../../components/Icons/CheckIcon';
import { Divider } from '@nextui-org/react';
import Typography from '../../../components/Typography';
import useResume from '../hooks/useResume';

export const ThanksPage = () => {

    const {userName, lastName, dni, cellphone, planName, price} = useResume()

    return (
        <>  
            <div className='w-full mx-8 md:w-4/6' >

                <Typography.TitlePage className='pb-12'>Resumen del seguro </Typography.TitlePage>

                <CustomCard className='w-full'>
                    <CustomCard.Header>
                        <Typography>
                            <Typography.Small className='uppercase font-semibold'>Precios calculados para:</Typography.Small>
                            <Typography.TitleContainer className='font-bold'>{userName} {lastName}</Typography.TitleContainer>
                        </Typography>
                    </CustomCard.Header>
                    <Divider/>
                    <CustomCard.Body className='flex flex-col gap-4'>
                        <Typography>
                            <Typography.Base>Responsable de pago</Typography.Base>
                            <Typography.Small>
                                <CheckIcon/> 
                                DNI: {dni}
                            </Typography.Small>
                            <Typography.Small>
                                <CheckIcon/> 
                                Celular: {cellphone}
                            </Typography.Small>
                        </Typography>
                        <Typography>
                            <Typography.Base>Plan elegido</Typography.Base>
                            <Typography.Small>
                                <CheckIcon/> 
                                {planName}
                            </Typography.Small>
                            <Typography.Small>
                                <CheckIcon/> 
                                Costo del Plan: ${price} al mes
                            </Typography.Small>
                        </Typography>
                    </CustomCard.Body>
                </CustomCard>

            </div>
        </>
    )
}
