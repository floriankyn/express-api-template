import { z } from 'zod';

const envSchema = z.object({
    MASTER_TOKEN_SECRET: z.string(),
    DATABASE_URL: z.string()
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
