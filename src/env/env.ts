import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const myEnvSchema = z.object({
  DB_PASSWORD: z.string(),
  DATABASE_URL: z.string(),
});

const envParse = myEnvSchema.safeParse(process.env);

if (!envParse.success) throw new Error('Problem with Env variables, fix it and try again!');

export const env = envParse.data;