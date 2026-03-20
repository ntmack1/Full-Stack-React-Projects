import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const server = createServer(async (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  const response = await readFile('users.json')
  res.end(response)
})

const host = 'localhost'
const port = 3000

server.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`)
})
