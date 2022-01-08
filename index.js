import express from 'express'
import serverRoutes from './routes/serverRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import sequelize from './db.js'
import {Repo, User} from "./models/models.js";

dotenv.config()

const app = express()

app.use(serverRoutes)
app.use(cors)
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('alo')
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()