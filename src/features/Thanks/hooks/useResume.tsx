import { useUserStore } from '../../../store/userStore'
import { usePlanStore } from '../../../store/usePlanStore'

const useResume = () => {
    const [userName, lastName] = useUserStore(state => [state.name, state.lastName])
    const [dni, cellphone] = useUserStore(state => [state.dni, state.cellphone])
    const [planName, price] = usePlanStore(state => [state.planName, state.price])

    return {userName, lastName, dni, cellphone, planName, price}
}

export default useResume