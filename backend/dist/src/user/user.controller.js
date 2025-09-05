"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const jwt_1 = require("@nestjs/jwt");
const user_dto_1 = require("./user.dto");
const jwt_strategy_1 = require("./jwt.strategy");
const my_property_service_1 = require("../my-property/my-property.service");
let UserController = class UserController {
    constructor(userService, jwtService, myPropertyService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.myPropertyService = myPropertyService;
    }
    async signup(name, email, password) {
        const user = await this.userService.create({ name, email, password });
        return user;
    }
    async login(email, password, response) {
        if (!email || !password) {
            throw new common_1.BadRequestException('Email and password are required');
        }
        const user = await this.userService.findOne({ email });
        if (!user) {
            throw new common_1.BadRequestException('Wrong email');
        }
        if (password !== user.password) {
            throw new common_1.BadRequestException('Wrong password');
        }
        const jwt = await this.jwtService.signAsync({ userId: user.id });
        response.cookie('token', jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 120000,
        });
        return {
            message: `Success login, welcome ${user.name}`,
        };
    }
    async user(request) {
        try {
            const token = request.cookies['token'];
            if (!token) {
                throw new common_1.UnauthorizedException('No token provided');
            }
            const data = await this.jwtService.verifyAsync(token);
            const user = await this.userService.findOne({ id: data.userId });
            const { password, ...result } = user;
            return result;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
    async getProfile(request) {
        const user = await this.userService.findOne({ id: request.user.userId });
        const { password, ...result } = user;
        return result;
    }
    async updateProfile(request, updateUserDto) {
        return this.userService.update(request.user.userId, updateUserDto);
    }
    async getMyProperties(req) {
        const userId = req.user.userId;
        return this.myPropertyService.findAllByUser(userId);
    }
    logout(response) {
        response.clearCookie('token');
        return {
            message: 'Logout successful.',
        };
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('email')),
    __param(1, (0, common_1.Body)('password')),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "user", null);
__decorate([
    (0, common_1.Get)('my-profile'),
    (0, common_1.UseGuards)(jwt_strategy_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('update'),
    (0, common_1.UseGuards)(jwt_strategy_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Get)('my-properties'),
    (0, common_1.UseGuards)(jwt_strategy_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getMyProperties", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "logout", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        my_property_service_1.MyPropertyService])
], UserController);
//# sourceMappingURL=user.controller.js.map