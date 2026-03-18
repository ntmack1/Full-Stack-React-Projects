import { writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'

const users = [{ name: 'Bob', email: 'Bob@gmail.com' }]

const usersJson = JSON.stringify(users)

const filePath = path.join(import.meta.dirname, 'users.json')

console.log(filePath)

await writeFile(filePath, usersJson)

const readUsersJson = await readFile(filePath, 'utf-8')

const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)
