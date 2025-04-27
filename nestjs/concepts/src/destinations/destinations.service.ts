import { Injectable } from '@nestjs/common';
import { CreateDestinationDto } from 'src/auth/dto/create-destination.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DestinationsService {
    constructor(private prisma : PrismaService){}
    async create(userId:number,createDestinationDto:CreateDestinationDto){
        return this.prisma.destination.create({
            data:{
                ...createDestinationDto,
                travelDate:new Date(createDestinationDto.travelDate).toISOString(),
                userId
            }
        })
    }

    async findAll(userId)
}
