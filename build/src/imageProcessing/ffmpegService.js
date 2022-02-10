"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FfmpegService = void 0;
const fs_1 = __importDefault(require("fs"));
const util_1 = __importDefault(require("util"));
const exec = util_1.default.promisify(require('child_process').exec);
class FfmpegService {
    static getPicture(timestamp, url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cwd = process.cwd();
                yield exec(`${cwd}/src/lib/ffmpeg -ss 1 -i ${url} -vframes ${timestamp} -vcodec png -an -y result.png  `);
                const result = Buffer.from(fs_1.default.readFileSync('./result.png')).toString('base64');
                console.log(result);
                return result;
            }
            catch (e) {
                return e;
            }
        });
    }
}
exports.FfmpegService = FfmpegService;
