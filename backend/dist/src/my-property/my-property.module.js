"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPropertyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const my_property_repository_1 = require("./my-property.repository");
const my_property_service_1 = require("./my-property.service");
let MyPropertyModule = class MyPropertyModule {
};
exports.MyPropertyModule = MyPropertyModule;
exports.MyPropertyModule = MyPropertyModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([my_property_repository_1.MyPropertyRepository])],
        providers: [my_property_service_1.MyPropertyService],
        exports: [my_property_repository_1.MyPropertyRepository],
    })
], MyPropertyModule);
//# sourceMappingURL=my-property.module.js.map