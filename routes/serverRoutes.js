import {Router} from "express";
import {getUser} from "../controllers/getUserController.js";
import {getRepos} from "../controllers/getReposController.js";

const router = Router()

router.get('/users/:userName', getUser)
router.get('/users/:userName/repos', getRepos)

export default router