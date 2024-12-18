export class CreateUser {
  email: string = '';
  name: string = '';
  password: string = '';
}

export class UpdateUser extends CreateUser {
  id: number = 0;
}
