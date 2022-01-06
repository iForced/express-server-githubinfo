import {repos} from "../mocks/repos.js";

export function getRepos(req, res) {
    const requestedRepos = repos.filter(repo => repo.owner.toLowerCase() === req.params.userName.toLowerCase())
    res.status(200).json(requestedRepos)
}