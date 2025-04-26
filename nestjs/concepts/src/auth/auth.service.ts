import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  // handle the new user registration
  async register(registerDto:RegisterDto) {
    const {email,password} = registerDto
    // check if the user is exists
    const existingUser = await this.prisma.user.findUnique({
        where : {email}
    })

    if(existingUser){
        throw new ConflictException('User already exists! Please try with a different email')
    }
    // hash the password

    const hashedPassword = 
    // create new user
    // remove password from the return object
  }
}
