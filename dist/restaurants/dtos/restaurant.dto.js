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
exports.RestaurantOutput = exports.RestaurantInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const restaurant_entity_1 = require("../entities/restaurant.entity");
let RestaurantInput = class RestaurantInput {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], RestaurantInput.prototype, "restaurantId", void 0);
RestaurantInput = __decorate([
    graphql_1.InputType()
], RestaurantInput);
exports.RestaurantInput = RestaurantInput;
let RestaurantOutput = class RestaurantOutput extends output_dto_1.CommonOutput {
};
__decorate([
    graphql_1.Field((type) => restaurant_entity_1.Restaurant, { nullable: true }),
    __metadata("design:type", restaurant_entity_1.Restaurant)
], RestaurantOutput.prototype, "restaurant", void 0);
RestaurantOutput = __decorate([
    graphql_1.ObjectType()
], RestaurantOutput);
exports.RestaurantOutput = RestaurantOutput;
//# sourceMappingURL=restaurant.dto.js.map