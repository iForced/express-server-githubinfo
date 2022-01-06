import {users} from "../mocks/users.js";

export function getUser (req, res) {
    const requestedUser = users.find(user => user.login.toLowerCase() === req.params.userName.toLowerCase())
    res.status(200).json(requestedUser)
}