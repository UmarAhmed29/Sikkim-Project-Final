export class ILogin {
    id?: number;
    email: string;
    password: string;
    schoolID: string;
    schoolName: string;
    city: string;
}

export class Login implements ILogin {
    id?= null;
    email = '';
    password = '';
    schoolID = '';
    schoolName = '';
    city = '';
}
