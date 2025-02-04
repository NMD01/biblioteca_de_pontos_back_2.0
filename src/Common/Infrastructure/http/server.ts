import { env } from '../Env'
import app from './app'

const port = env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${env.PORT}`)
})
