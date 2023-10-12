import { Suspense } from "react"
import { ErrorBoundary } from "../ErrorBoundary"
import { Skeleton } from "@nextui-org/react"
import Typography from "../../../../components/Typography"
import PlanListData from "./PlanListData"

const PlanList = () => {
    // const licensePlate = useUserStore(state => state.licensePlate)

    return (
        <div className='w-full gap-6'>

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
                    <PlanListData />

                </Suspense>
            </ErrorBoundary>

        </div>
    )
}

export default PlanList