import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DestinationsService } from './destinations.service';
import { CreateDestinationDto } from 'src/auth/dto/create-destination.dto';

@Controller('destinations')
@UseGuards(JwtAuthGuard)
export class DestinationsController {
    constructor(private readonly destinationsService:DestinationsService){}

    @Post()
    create(@Request() req, @Body() createDestinationDto:CreateDestinationDto){
        return this.destinationsService.create(req.user.userId,createDestinationDto)
    }
}
