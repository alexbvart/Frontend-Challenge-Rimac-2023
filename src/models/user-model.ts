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
    // dni: string;
    // setDni: (dni: string) => void;

    // cellPhone: string;
    // setCellPhone: (cellPhone: string) => void;

    // licensePlate: string;
    // setLicensePlate: (licensePlate: string) => void;

    // mailing: string;
    // setMailing: (mailing: string) => void;

    lastName: string;
    setLastName: (lastName: string) => void;

    birthDay: string;
    setBirthDay: (birthDay: string) => void;
    
    name: string;
    setName: (name: string) => void;
}