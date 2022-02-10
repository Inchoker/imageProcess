import fs from 'fs'
import util from 'util'
const exec = util.promisify(require('child_process').exec);

export class FfmpegService {
    public static async getPicture(timestamp: string, url: string): Promise<any> {
        try {
            const cwd = process.cwd();
            await exec(`${cwd}/src/lib/ffmpeg -ss 1 -i ${url} -vframes ${timestamp} -vcodec png -an -y result.png  `)
            const result = Buffer.from(fs.readFileSync('./result.png')).toString('base64')
            console.log(result)
            return result
        } catch (e) {
            return e
        }
    }
}
