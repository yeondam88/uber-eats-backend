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
exports.SearchRestaurantOutput = exports.SearchRestaurantInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const pagination_dto_1 = require("./pagination.dto");
const restaurant_entity_1 = require("../entities/restaurant.entity");
let SearchRestaurantInput = class SearchRestaurantInput extends pagination_dto_1.PaginationInput {
};
__decorate([
    graphql_1.Field((type) => String),
    __metadata("design:type", String)
], SearchRestaurantInput.prototype, "query", void 0);
SearchRestaurantInput = __decorate([
    graphql_1.InputType()
], SearchRestaurantInput);
exports.SearchRestaurantInput = SearchRestaurantInput;
let SearchRestaurantOutput = class SearchRestaurantOutput extends pagination_dto_1.PaginationOutput {
};
__decorate([
    graphql_1.Field((type) => [restaurant_entity_1.Restaurant], { nullable: true }),
    __metadata("design:type", Array)
], SearchRestaurantOutput.prototype, "restaurants", void 0);
SearchRestaurantOutput = __decorate([
    graphql_1.ObjectType()
], SearchRestaurantOutput);
exports.SearchRestaurantOutput = SearchRestaurantOutput;
//# sourceMappingURL=search-restaurant.dto.js.map