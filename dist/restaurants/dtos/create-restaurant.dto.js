"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRestaurantDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const restaurant_entity_1 = require("../entities/restaurant.entity");
let CreateRestaurantDto = class CreateRestaurantDto extends graphql_1.OmitType(restaurant_entity_1.Restaurant, ['id']) {
};
CreateRestaurantDto = __decorate([
    graphql_1.InputType()
], CreateRestaurantDto);
exports.CreateRestaurantDto = CreateRestaurantDto;
//# sourceMappingURL=create-restaurant.dto.js.map