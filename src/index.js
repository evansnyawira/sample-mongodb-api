import { start } from "./app";
import { db } from "./db/";
import { mdbConnectionString } from './config/config'
const server = async () => {
    await db.connect(mdbConnectionString).then(() => console.log('Connected'))
    await start()
    
}
server()