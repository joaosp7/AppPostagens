import { db } from '.';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { userTable } from './schema';

async function seed() {
  const user: CreateUserDto = {
    email: 'sonic@gmail.com',
    name: 'sonic',
  };

  await db.insert(userTable).values(user);
}

seed().then(() => {
  console.log('User inserted on database!');
});
