// src/imageProcessing/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
} from "tsoa";
import { FfmpegService } from "./ffmpegService";

@Route("ffmpeg")
export class UsersController extends Controller {
    @Get('image')
    public async getImage(
        @Query() timestamp: string,
        @Query() url: string
    ): Promise<any> {
        return  FfmpegService.getPicture(timestamp,url);
    }
}
