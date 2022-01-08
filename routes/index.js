import {Router} from "express";
import userRouter from "./userRouter.js";
import repoRouter from "./repoRouter.js";

const router = Router()

router.use('/users', userRouter)
router.use('/repos', repoRouter)

export default router