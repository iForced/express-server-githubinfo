import {Sequelize} from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export default new Sequelize(
    'github_info',
    'postgres',
    '1234',
    {
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 5444,
    }

)