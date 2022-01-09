import {Router} from "express";
import userRouter from "./userRouter.js";
import repoRouter from "./repoRouter.js";
import authRouter from "./authRouter.js";

const router = Router()

router.use('/users', userRouter)
router.use('/repos', repoRouter)
router.use('/auth', authRouter)

export default router