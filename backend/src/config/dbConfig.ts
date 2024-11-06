import { Sequelize } from 'sequelize';
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
    private sequelize: Sequelize;

    constructor() {
        const env: EnvConfig = process.env as unknown as EnvConfig;

        if (!env.DB_HOST || !env.DB_NAME || !env.DB_USER || !env.DB_PASSWORD) {
            throw new Error('Faltan variables de entorno. Asegúrate de definir DB_HOST, DB_NAME, DB_USER y DB_PASSWORD en tu archivo .env');
        }

        this.sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
            host: env.DB_HOST,
            dialect: 'mysql',
            logging: false,
        });
    }

    public getSequelize() {
        return this.sequelize;
    }
}

export default DbConfig;
