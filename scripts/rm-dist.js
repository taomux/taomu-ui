import fs from 'fs'
import path from 'path'

const rootPath = process.cwd()
const distPath = path.join(rootPath, './dist')
const typesDistPath = path.join(rootPath, './types')

if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true })
}

if (fs.existsSync(typesDistPath)) {
  fs.rmSync(typesDistPath, { recursive: true, force: true })
}
