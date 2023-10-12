import {  Skeleton } from "@nextui-org/react";

import Typography from "../../../../components/Typography";
import { ErrorBoundary } from "../ErrorBoundary";
import { Suspense } from 'react'

import UserName from "./UserInfo/UserName";

const Hero = () => {
    // const licensePlate = useUserStore(state => state.licensePlate)

    return (
        <div className='w-full py-4 px-4 gap-6'>

            <ErrorBoundary
                renderOnError={({ error }) => <Typography>{error?.message}</Typography>}
            >
                <Suspense
                    fallback={
                        <Skeleton className="w-2/5 rounded-lg">
                            <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                        </Skeleton>
                    }
                >
                    <Typography> 
                        <Typography.TitlePage className="inline"> 
                            <UserName /> 
                            ¿Para quién deseas cotizar?
                        </Typography.TitlePage>
                    </Typography> 
                </Suspense>
            </ErrorBoundary>

            <Typography.Base> Selecciona la opción que se ajuste más a tus necesidades.</Typography.Base>

        </div>
    )
}

export default Hero