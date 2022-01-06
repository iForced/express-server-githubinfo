import express from 'express'
import serverRoutes from './routes/serverRoutes.js'
import cors from 'cors'

const app = express()

app.use(serverRoutes)
app.use(cors)
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000')
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
//     next()
// })
// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['true']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

const PORT = 5000
app.get('/', (req, res) => {
    res.send('alo')
})

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`))