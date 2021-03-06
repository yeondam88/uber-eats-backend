import { CommonOutput } from 'src/common/dtos/output.dto';
import { Category } from '../entities/category.entity';
export declare class AllCategoriesOutput extends CommonOutput {
    categories?: Category[];
}
