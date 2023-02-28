import os from "os"
import fs from "fs"
import path from "path";
const FilePath = path.join(os.homedir(), 'weather-data.json')


const TOKEN_DICTIONARY = {
    token: 'token',
    city: 'city',
}

const saveKeyValue = async (key, value) => {
    let data = {}
    if (await isExist(FilePath)) {
        const file = await fs.promises.readFile(FilePath)
        data = JSON.parse(file)
    }

    data[key] = value
    await fs.promises.writeFile(FilePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
    if (await isExist(FilePath)) {
        const file = await fs.promises.readFile(FilePath)
        const data = JSON.parse(file)
        return data[key]
    }

    return undefined
}

const isExist = async (path) => {
    try {
        await fs.promises.stat(path)
        return true
    } catch (error) {
        return false
    }
}

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY }