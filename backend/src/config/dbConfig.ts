import mysql from 'mysql2';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

interface EnvConfig {
    DB_HOST: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
}

class DbConfig {
    private pool: mysql.Pool;

    constructor() {

        const env: EnvConfig = process.env as unknown as EnvConfig;

        if (!env.DB_HOST || !env.DB_NAME || !env.DB_USER || !env.DB_PASSWORD) {
            throw new Error('Faltan variables de entorno. Asegúrate de definir DB_HOST, DB_NAME, DB_USER y DB_PASSWORD en tu archivo .env');
        }

        this.pool = mysql.createPool({
            host: env.DB_HOST,
            database: env.DB_NAME,
            user: env.DB_USER,
            password: env.DB_PASSWORD,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    public getPool() {
        return this.pool.promise();
    }
}

export default DbConfig;
