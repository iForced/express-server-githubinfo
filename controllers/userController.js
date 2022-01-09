import {User} from "../models/models.js";

class UserController {
    async getAll(req, res) {
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit

        const users = await User.findAndCountAll({limit, offset})

        return res.json(users)
    }
    async getOneById(req, res) {
        const {id} = req.params

        const user = await User.findOne({where: {id}})

        return res.json(user)
    }
    async add(req, res) {
        const {login} = req.body

        const createdUser = await User.create({login})

        return res.json(createdUser)
    }
    async delete(req, res) {
        const {id} = req.params

        await User.destroy({where: {id}})

        return res.json(id)
    }
}

export default new UserController()