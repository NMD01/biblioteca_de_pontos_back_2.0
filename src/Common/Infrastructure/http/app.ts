import express from 'express'
import cors from 'cors'
import routes from './routes'
import { errorHandler } from './Middlewares/errorHandler'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

export default app
