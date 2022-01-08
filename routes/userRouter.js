import {Router} from "express";
import UserController from "../controllers/userController.js";

const router = Router()

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOne)
router.post('/add', UserController.add)
router.delete('/:id', UserController.delete)

export default router