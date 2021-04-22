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
exports.EditDishOutput = exports.EditDishInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const dish_entity_1 = require("../entities/dish.entity");
let EditDishInput = class EditDishInput extends graphql_1.PickType(graphql_1.PartialType(dish_entity_1.Dish), [
    'name',
    'options',
    'price',
    'description',
]) {
};
__decorate([
    graphql_1.Field(() => graphql_1.Int),
    __metadata("design:type", Number)
], EditDishInput.prototype, "dishId", void 0);
EditDishInput = __decorate([
    graphql_1.InputType()
], EditDishInput);
exports.EditDishInput = EditDishInput;
let EditDishOutput = class EditDishOutput extends output_dto_1.CommonOutput {
};
EditDishOutput = __decorate([
    graphql_1.ObjectType()
], EditDishOutput);
exports.EditDishOutput = EditDishOutput;
//# sourceMappingURL=edit-dish.dto.js.map