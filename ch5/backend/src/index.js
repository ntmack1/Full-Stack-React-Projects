import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './db/init.js'

dotenv.config()

try {
  await initDatabase()
  const PORT = process.env.PORT
  app.listen(PORT, '0.0.0.0')
  console.info(`express server running on http://localhost:${PORT}`)
} catch (err) {
  console.error('error connectingto databse:', err)
}
