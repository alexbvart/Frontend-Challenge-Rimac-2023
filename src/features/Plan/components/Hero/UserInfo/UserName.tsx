import { ErrorMessage, URL_PUBLIC_API_USER } from '../../../../../utilities/constants';
import { fetchEndpoint } from '../../../../Home/services/call-endpoint';
import { useUserStore } from '../../../../../store/userStore';
import { useData } from '../../../../../hooks/useData';
import { UserModel } from '../../../../../models/user-model';

const UserName = () => {

    const setName = useUserStore(state => state.setName)
    const setLastName = useUserStore(state => state.setLastName)
    const setBirthDay = useUserStore(state => state.setBirthDay)

    const { data, error, isLoading } = useData<UserModel>({ key: URL_PUBLIC_API_USER, fetcher: fetchEndpoint });

    if (!error && !isLoading && data) {
        const { name, lastName, birthDay } = data;
        name && setName(name)
        lastName && setLastName(lastName)
        birthDay && setBirthDay(birthDay)
    }

    return (
        <span className={`${isLoading && "animate-pulse rounded-lg inline-block"}`}>
            {data &&
                data.name !== ErrorMessage
                ? data.name
                : ""}
        </span>
    )
}

export default UserName