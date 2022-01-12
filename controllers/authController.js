import {User} from "../models/models.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const returnUserEntity = (user) => {
    return {
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        followers: user.followers,
        followings: user.followings,
    }
}

class AuthController {
    async register(req, res) {
        const {login, password} = req.body

        if (!login || !password) return res.status(400).json({message: 'Enter login and password'})
        const candidate = await User.findOne({where: {login}})
        if (candidate) return res.status(400).json({message: 'User already exist'})
        const hashPassword = await bcrypt.hash(password, 5)
        const newUser = await User.create({login, password: hashPassword})
        const token = jwt.sign(returnUserEntity(newUser), 'secret_key', {expiresIn: '24h'})

        return res.json({
            token,
            user: returnUserEntity(newUser),
        })
    }
    async login(req, res) {
        const {login, password} = req.body

        const user = await User.findOne({where: {login}})
        if (!user) return res.status(404).json({message: 'User not found'})
        const comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) return res.status(404).json({message: 'Incorrect password'})
        const token = jwt.sign(returnUserEntity(user), 'secret_key', {expiresIn: '24h'})

        return res.json({
            token,
            user: returnUserEntity(user),
        })
    }
    async me(req, res) {
        const token = jwt.sign(returnUserEntity(req.user), 'secret_key', {expiresIn: '24h'})

        return res.json({
            token,
            user: returnUserEntity(req.user),
        })
    }
}

export default new AuthController()