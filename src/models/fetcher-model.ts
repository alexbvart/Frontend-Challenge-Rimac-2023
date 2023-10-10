
export interface UseData<T> {
    key: string,
    fetcher: (url:string) => Promise<T>
    swrOptions?: any;
}

export interface Response<T> {
    data: T | undefined
    error: string | undefined
    isLoading: boolean
}