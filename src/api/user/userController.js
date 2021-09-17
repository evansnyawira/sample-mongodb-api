import { createUser } from "./userDAO";


const create = async (req, res) => {
    const {name, email, password} = req.body;
    const user = await createUser({name, email, password});
    res.json(user)
}