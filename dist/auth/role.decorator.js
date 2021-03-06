"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../users/entities/user.entity");
exports.Role = (roles) => common_1.SetMetadata('roles', roles);
//# sourceMappingURL=role.decorator.js.map