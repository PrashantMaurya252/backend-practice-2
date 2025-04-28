import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {v2 as cloudinary} from 'cloudinary'

@Injectable()
export class FileUploadService {
    constructor(private prisma: PrismaService){
        cloudinary.config({
            cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
            api_key:process.env.CLOUDINARY_API_KEY,
            api_secret:process.env.CLOUDINARY_API_SECRET
        }

        )
    }
}
