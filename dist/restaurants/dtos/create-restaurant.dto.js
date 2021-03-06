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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRestaurantOutput = exports.CreateRestaurantInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const restaurant_entity_1 = require("../entities/restaurant.entity");
let CreateRestaurantInput = class CreateRestaurantInput extends graphql_1.PickType(restaurant_entity_1.Restaurant, [
    'name',
    'coverImage',
    'address'
]) {
};
__decorate([
    graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateRestaurantInput.prototype, "categoryName", void 0);
CreateRestaurantInput = __decorate([
    graphql_1.InputType()
], CreateRestaurantInput);
exports.CreateRestaurantInput = CreateRestaurantInput;
let CreateRestaurantOutput = class CreateRestaurantOutput extends output_dto_1.CommonOutput {
};
CreateRestaurantOutput = __decorate([
    graphql_1.ObjectType()
], CreateRestaurantOutput);
exports.CreateRestaurantOutput = CreateRestaurantOutput;
//# sourceMappingURL=create-restaurant.dto.js.map