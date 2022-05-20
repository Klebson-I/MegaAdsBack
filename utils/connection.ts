import {createPool} from "mysql2/promise";
import {config} from "../config/config";

export const pool = createPool({
    host: config.dbHost,
    user: config.user,
    database: config.database,
    namedPlaceholders: true,
    decimalNumbers: true
})