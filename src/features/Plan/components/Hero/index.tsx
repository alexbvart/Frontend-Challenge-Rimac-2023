import Typography from "../../../../components/Typography";
import { ErrorBoundary } from "../ErrorBoundary";
import { Suspense } from 'react'

import UserName from "./UserInfo/UserName";

const Hero = () => {
    return (
        <div className='w-full lg:w-3/4 lg:text-center 300 py-4 px-4 gap-6 mb-4'>

            <ErrorBoundary
                renderOnError={({ error }) => <Typography>{error?.message}</Typography>}
            >
                <Suspense
                    fallback={
                        <Typography>
                            <Typography.TitlePage className="inline animate-pulse">
                                ¿Para quién deseas cotizar?
                            </Typography.TitlePage>
                        </Typography>
                    }
                >
                    <Typography>
                        <Typography.TitlePage className="inline ">
                            <UserName /> ¿Para quién deseas cotizar?</Typography.TitlePage>
                    </Typography>
                </Suspense>
            </ErrorBoundary>

            <Typography.Base> Selecciona la opción que se ajuste más a tus necesidades.</Typography.Base>

        </div>
    )
}

export default Hero