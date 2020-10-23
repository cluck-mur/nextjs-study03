import fs from 'fs'
import path from 'path'

const privateDirectory = path.join(process.cwd(), 'private')

/**
 * トークンをjsonファイルから読み込む
 */
const GetToken = (): string => {
  const filename: string = 'token.json'
  const fullPath: string = path.join(privateDirectory, filename)
  const json_file: Buffer = fs.readFileSync(fullPath)
  const json = JSON.parse(json_file.toString())

  return json.token
}

export default GetToken
