import path from "path";

import dotenv from "dotenv";
import { cleanEnv, str, num } from "envalid";

dotenv.config({
  path: path.join(
    path.dirname(path.dirname(__dirname)),
    `.env.local.${process.env.NODE_ENV}`
  ),
});

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "test", "production"] }),
  SUPABASE_ANON_KEY: str(),
  SUPABASE_URL: str(),
  MAX_CONCURRENCY: num(),
});

export default env;
