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
    async getOneByOwner(req, res) {
        const {owner} = req.params

        const repo = await Repo.findOne({where: {owner}})

        return res.json(repo)
    }
    async add(req, res) {
        try {
            const {name, description, owner} = req.body

            const createdRepo = await Repo.create({name, description, owner})

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