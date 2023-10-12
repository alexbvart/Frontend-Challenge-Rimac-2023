import useSWR, { SWRConfiguration }  from 'swr';
import { UseData, Response } from '../models/fetcher-model';



export const useData = <T,>({key, fetcher} : UseData<T> ) : Response<T> => {

    const swrConfig: SWRConfiguration = {
        suspense: true,
        // revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        // fallbackData: UserDataMock,
      };

     const { data, error, isValidating  } = useSWR<T, string>(key, fetcher , swrConfig);

  return { data, error, isLoading: isValidating  } 
}
