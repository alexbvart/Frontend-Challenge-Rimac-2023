

import Typography from '../../../components/Typography'
import { Divider } from "@nextui-org/react";
import { Container } from '../../../styles-components/Container';
import { LoginForm } from '../components/Form/LoginForm';
import { BlurColor } from '../../../styles-components/BlurColor';

// million-ignore
const HomePage = () => {
    return (
        <Container x y >

            <BlurColor/>

            <div className={`container-layout gap-x-12 md:gap-x-32  xl:pr-52`} >

                <Typography className='hero-layout flex flex-col gap-4'>
                    <Typography.Small className='w-fit font-bold bg-dg'>
                        Seguro Salud Flexible
                    </Typography.Small>
                    <Typography.TitlePage >Creado para ti y tu familia</Typography.TitlePage>
                </Typography>

                <Typography className='hero-layout-2 flex flex-col gap-4'>
                    <Divider className="my-4" />
                    <Typography.Small className='hero-layout-2 font-bold '>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</Typography.Small>
                </Typography>

                <div className='image-layout w-full h-40 bg-image-cover rounded-2xl  md:h-full md:min-h-[590px]'></div>
                <section className="form-layout w-full flex flex-col ">
                    <LoginForm />
                </section>

            </div>

        </Container>
    )
}

export default HomePage