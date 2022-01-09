import {Router} from "express";
import ReposController from "../controllers/reposController.js";

const router = Router()

router.get('/', ReposController.getAll)
router.get('/:owner', ReposController.getOneByOwner)
router.post('/add', ReposController.add)
router.delete('/:id', ReposController.delete)

export default router