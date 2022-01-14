import {Router} from "express";
import ReposController from "../controllers/reposController.js";

const router = Router()

router.get('/', ReposController.getAll)
router.get('/:id', ReposController.getOneById)
router.post('/add', ReposController.add)
router.delete('/:id', ReposController.delete)
router.post('/contribute', ReposController.contribute)

export default router