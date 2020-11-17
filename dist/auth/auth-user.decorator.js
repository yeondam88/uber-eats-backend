"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.AuthUser = common_1.createParamDecorator((data, context) => {
    const gqlContext = graphql_1.GqlExecutionContext.create(context).getContext();
    return gqlContext['user'];
});
//# sourceMappingURL=auth-user.decorator.js.map