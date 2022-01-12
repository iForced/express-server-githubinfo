import express from 'express'
import dotenv from 'dotenv'
import sequelize from './db.js'
import router from "./routes/index.js";
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors({
    origin: ['http://localhost:3000'],
    credential: true,
}))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/api', router)

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