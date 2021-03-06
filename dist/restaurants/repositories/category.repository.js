"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const category_entity_1 = require("../entities/category.entity");
const index_1 = require("typeorm/index");
let CategoryRepository = class CategoryRepository extends index_1.Repository {
    async getOrCreate(name) {
        const categoryName = name.trim().toLowerCase();
        const categorySlug = categoryName.replace(/ /g, '-');
        let category = await this.findOne({ slug: categorySlug });
        if (!category) {
            category = await this.save(this.create({ slug: categorySlug, name: categoryName }));
        }
        return category;
    }
};
CategoryRepository = __decorate([
    index_1.EntityRepository(category_entity_1.Category)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map