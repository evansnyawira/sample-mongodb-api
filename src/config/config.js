import dotenv from 'dotenv';

dotenv.config()

export const port = process.env.PORT || 3003
export const mdbConnectionString = process.env.MDB_CONNECTION_STRING
