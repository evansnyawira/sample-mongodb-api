import dotenv from 'dotenv';

dotenv.config()

export const port = process.env.PORT || 3001
export const node_env = process.env.NODE_ENV || 'development'
export const mdbConnectionString = process.env.MDB_CONNECTION_STRING
