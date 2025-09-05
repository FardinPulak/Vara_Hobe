import { BadRequestException, Body, Controller, Get, Post, Put, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UpdateUserDto } from './user.dto';
import { JwtAuthGuard } from './jwt.strategy';
import { MyPropertyService } from 'src/my-property/my-property.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
    private readonly myPropertyService: MyPropertyService,
  ) {}

  @Post('signup')
  async signup(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {
    const user = await this.userService.create({ name, email, password });
    // Optionally, delete password before returning (to avoid sending it in the response)
    //delete user.password;
    return user;
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new BadRequestException('Wrong email');
    }

    if (password !== user.password) {
      throw new BadRequestException('Wrong password');
    }

    const jwt = await this.jwtService.signAsync({ userId: user.id }); // Assuming "id" is the primary key for user

    response.cookie('token', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 120000, // 2 minutes
    });

    return {
      message: `Success login, welcome ${user.name}`,
    };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const token = request.cookies['token'];
      if (!token) {
        throw new UnauthorizedException('No token provided');
      }

      const data = await this.jwtService.verifyAsync(token);
      const user = await this.userService.findOne({ id: data.userId }); // userId is extracted from token
      const { password, ...result } = user; // Exclude password from response
      return result;
    } catch (e) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  // Profile route to get user details
  @Get('my-profile')
  @UseGuards(JwtAuthGuard)  // Protect route with JWT guard
  async getProfile(@Req() request) {
    const user = await this.userService.findOne({ id: request.user.userId }); // Access the user from the request object
    const { password, ...result } = user; // Exclude password from response
    return result;
  }

  // Route to update user profile
  @Put('update')
  @UseGuards(JwtAuthGuard)  // Protect route with JWT guard
  async updateProfile(@Req() request, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(request.user.userId, updateUserDto); // Update profile
  }

  // Fetch all properties of the logged-in user
  @Get('my-properties')
  @UseGuards(JwtAuthGuard)  // Protect route with JWT guard
  async getMyProperties(@Req() req) {
    const userId = req.user.userId; // Get userId from the JWT payload
    return this.myPropertyService.findAllByUser(userId); // Fetch properties by userId
  }

  // Logout and clear the token cookie
  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('token');
    return {
      message: 'Logout successful.',
    };
  }
}
