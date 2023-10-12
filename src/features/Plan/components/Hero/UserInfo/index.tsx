import { Suspense } from 'react'
import UserName from './UserName'
import { ErrorBoundary } from '../../ErrorBoundary'
import Typography from '../../../../../components/Typography'
import { Skeleton } from '@nextui-org/react'

const UserInfo = () => {
    return (
        <ErrorBoundary 
            renderOnError={({error}) => <Typography>{error?.message}</Typography>}
        >
            <Suspense
                fallback={
                    <Skeleton className="w-2/5 rounded-lg">  
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                }
            >
                <UserName />
            </Suspense>
        </ErrorBoundary>

    )
}

export default UserInfo