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
exports.Order = exports.OrderStatus = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const core_entity_1 = require("../../common/entities/core.entity");
const dish_entity_1 = require("../../restaurants/entities/dish.entity");
const restaurant_entity_1 = require("../../restaurants/entities/restaurant.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
const order_item_entity_1 = require("./order-item.entity");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Cooking"] = "Cooking";
    OrderStatus["PickedUp"] = "PickedUp";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
graphql_1.registerEnumType(OrderStatus, { name: 'OrderStatus' });
let Order = class Order extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field(() => user_entity_1.User, { nullable: true }),
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.orders, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "customer", void 0);
__decorate([
    graphql_1.Field(() => user_entity_1.User, { nullable: true }),
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.rides, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "driver", void 0);
__decorate([
    graphql_1.Field(() => restaurant_entity_1.Restaurant),
    typeorm_1.ManyToOne(() => restaurant_entity_1.Restaurant, (restaurant) => restaurant.orders, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    __metadata("design:type", restaurant_entity_1.Restaurant)
], Order.prototype, "restaurant", void 0);
__decorate([
    graphql_1.Field(() => [order_item_entity_1.OrderItem]),
    typeorm_1.ManyToMany(() => order_item_entity_1.OrderItem),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Order.prototype, "items", void 0);
__decorate([
    typeorm_2.Column({ nullable: true }),
    graphql_1.Field(() => graphql_1.Float, { nullable: true }),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    typeorm_2.Column({ type: 'enum', enum: OrderStatus }),
    graphql_1.Field(() => OrderStatus),
    class_validator_1.IsEnum(OrderStatus),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
Order = __decorate([
    graphql_1.InputType('OrderInputType', { isAbstract: true }),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], Order);
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map