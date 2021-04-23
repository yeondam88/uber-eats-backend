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
exports.CreateDishOutput = exports.CreateDishInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const dish_entity_1 = require("../entities/dish.entity");
let CreateDishInput = class CreateDishInput extends graphql_1.PickType(dish_entity_1.Dish, [
    'name',
    'price',
    'description',
    'options',
]) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateDishInput.prototype, "restaurantId", void 0);
CreateDishInput = __decorate([
    graphql_1.InputType()
], CreateDishInput);
exports.CreateDishInput = CreateDishInput;
let CreateDishOutput = class CreateDishOutput extends output_dto_1.CommonOutput {
};
CreateDishOutput = __decorate([
    graphql_1.ObjectType()
], CreateDishOutput);
exports.CreateDishOutput = CreateDishOutput;
//# sourceMappingURL=create-dish.dto.js.map