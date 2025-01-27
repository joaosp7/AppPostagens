import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const userTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 150 }).notNull(),
  email: varchar({ length: 150 }).notNull().unique(),
});
