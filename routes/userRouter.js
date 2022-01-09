import {Router} from "express";
import UserController from "../controllers/userController.js";

const router = Router()

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOneById)

export default router