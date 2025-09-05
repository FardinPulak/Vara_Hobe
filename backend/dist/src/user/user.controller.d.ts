import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UpdateUserDto } from './user.dto';
import { MyPropertyService } from 'src/my-property/my-property.service';
export declare class UserController {
    private readonly userService;
    private jwtService;
    private readonly myPropertyService;
    constructor(userService: UserService, jwtService: JwtService, myPropertyService: MyPropertyService);
    signup(name: string, email: string, password: string): Promise<void>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        name: string;
        email: string;
        properties: import("../my-property/my-property.entity").MyProperty[];
        userId: any;
    }>;
    getProfile(request: any): Promise<{
        id: number;
        name: string;
        email: string;
        properties: import("../my-property/my-property.entity").MyProperty[];
        userId: any;
    }>;
    updateProfile(request: any, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
    getMyProperties(req: any): Promise<void>;
    logout(response: Response): {
        message: string;
    };
}
