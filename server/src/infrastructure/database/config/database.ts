import 'dotenv/config';
import { Dialect, Options } from 'sequelize';

const config: Options = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'NF_DATABASE',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DIALECT as Dialect,
};

export = config;