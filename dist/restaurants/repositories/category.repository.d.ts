import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm/index';
export declare class CategoryRepository extends Repository<Category> {
    getOrCreate(name: string): Promise<Category>;
}
