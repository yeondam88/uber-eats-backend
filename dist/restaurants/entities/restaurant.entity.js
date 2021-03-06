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
exports.Restaurant = void 0;
const graphql_1 = require("@nestjs/graphql");
const core_entity_1 = require("../../common/entities/core.entity");
const category_entity_1 = require("./category.entity");
const index_1 = require("typeorm/index");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../users/entities/user.entity");
let Restaurant = class Restaurant extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field(() => String),
    index_1.Column(),
    class_validator_1.IsString(),
    class_validator_1.Length(2, 5),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    index_1.Column(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Restaurant.prototype, "coverImage", void 0);
__decorate([
    graphql_1.Field(() => String),
    index_1.Column(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], Restaurant.prototype, "address", void 0);
__decorate([
    graphql_1.Field(() => category_entity_1.Category, { nullable: true }),
    index_1.ManyToOne(() => category_entity_1.Category, (category) => category.restaurants, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    __metadata("design:type", category_entity_1.Category)
], Restaurant.prototype, "category", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User),
    index_1.ManyToOne(() => user_entity_1.User, (user) => user.restaurants, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], Restaurant.prototype, "owner", void 0);
__decorate([
    index_1.RelationId((restaurant) => restaurant.owner),
    __metadata("design:type", Number)
], Restaurant.prototype, "ownerId", void 0);
Restaurant = __decorate([
    graphql_1.InputType('RestaurantInputType', { isAbstract: true }),
    graphql_1.ObjectType(),
    index_1.Entity()
], Restaurant);
exports.Restaurant = Restaurant;
//# sourceMappingURL=restaurant.entity.js.map