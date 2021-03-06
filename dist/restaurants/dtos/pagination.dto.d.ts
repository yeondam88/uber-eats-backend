import { CommonOutput } from 'src/common/dtos/output.dto';
export declare class PaginationInput {
    page: number;
}
export declare class PaginationOutput extends CommonOutput {
    totalPages?: number;
    totalResults?: number;
}
