import fs from 'fs'
import os from 'os'
import path from 'path'

const filename = path.join(os.homedir(), '.brain-games-username')

export const saveUsername = (name) => {
  fs.writeFileSync(filename, name, 'utf-8')
}

export const getUsername = () => {
  try {
    return fs.readFileSync(filename, 'utf-8')
  } catch (e) {
    return null
  }
}
