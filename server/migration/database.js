import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({ connectionString:'postgres://xqcdshzv:hTgCJlMrv04NM5DeCjoFjnOJwLIhrs3n@fanny.db.elephantsql.com/xqcdshzv' });

export default pool;