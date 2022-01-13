import {Repo} from "../models/models.js";

class ReposController {
    async getAll(req, res) {
        let {page, limit} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit - limit

        const repos = await Repo.findAndCountAll({limit, offset})

        return res.json(repos)
    }
    async getOneById(req, res) {
        const {id} = req.params

        const repo = await Repo.findOne({where: {id}})

        return res.json(repo)
    }
    async add(req, res) {
        try {
            const {name, description, owner, userId} = req.body

            const createdRepo = await Repo.create({name, description, owner, userId})

            return res.json(createdRepo)
        } catch (e) {
            console.log(e)
        }
    }
    async delete(req, res) {
        const {id} = req.params

        await Repo.destroy({where: {id}})

        return res.json(id)
    }
}

export default new ReposController()