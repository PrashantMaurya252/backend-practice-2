import { PartialType } from "@nestjs/mapped-types";
import { CreateDestinationDto } from "src/auth/dto/create-destination.dto";


export class UpdateDestinationDto extends PartialType(CreateDestinationDto){}