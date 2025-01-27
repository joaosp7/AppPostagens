import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { db } from '../db';
import { userTable } from '../db/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  async createUser(createUserDto: CreateUserDto) {
    return await db.insert(userTable).values(createUserDto);
  }

  async findAll() {
    return await db.select().from(userTable);
  }

  async findOne(id: number) {
    return await db.select().from(userTable).where(eq(userTable.id, id));
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await db
      .update(userTable)
      .set(updateUserDto)
      .where(eq(userTable.id, id));
  }

  async remove(id: number) {
    return await db.delete(userTable).where(eq(userTable.id, id));
  }
}
