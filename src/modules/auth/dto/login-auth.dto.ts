import { User } from '../interfaces/user.interface';

export class LoginAuthDto implements User {
  id?: number | undefined;
  name?: string | undefined;
  email!: string;
  password!: string;
}
