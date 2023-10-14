export interface EndpointUserModel {
    name: string;
    lastName: string;
    birthDay: string;
}

export interface UserModel {
    name: string;
    lastName: string;
    birthDay: string;
}

export interface UserStore {

    lastName: string;
    setLastName: (lastName: string) => void;

    birthDay: string;
    setBirthDay: (birthDay: string) => void;

    name: string;
    setName: (name: string) => void;


    dni: string;
    setDni: (dni: string) => void;

    cellphone: string;
    setCellphone: (cellphone: string) => void;
}