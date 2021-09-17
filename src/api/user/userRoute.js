import { Router } from 'express'
import { createUser} from './userDAO'


const router = Router()

router.route('/users')
    .post(createUser)


export default router