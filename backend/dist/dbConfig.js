"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgConfig = void 0;
const user_entity_1 = require("./src/user/user.entity");
const my_property_entity_1 = require("./src/my-property/my-property.entity");
exports.pgConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "vara-hobe",
    synchronize: true,
    logging: true,
    entities: [user_entity_1.User, my_property_entity_1.MyProperty]
};
//# sourceMappingURL=dbConfig.js.map