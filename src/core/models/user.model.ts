export class User{
    id: number = 0;
    userName: string = '';
    surName: string = '';
    email: string = '';
    phoneNumber:string='';
    password:string='';
    userType: UserType = 0;
}

export enum UserType {
    Admin,
    User,
  }