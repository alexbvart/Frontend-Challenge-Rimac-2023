import { EndpointUserModel, UserModel } from "../models/user-model"

export const createAdapterUser = (user: EndpointUserModel)=>{
    const formattedUsaer: UserModel = {
        name: user.name,
        lastName: user.lastName,
        birthDay: user.birthDay,
    };
    return formattedUsaer;
}