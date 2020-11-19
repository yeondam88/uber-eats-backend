import { CommonOutput } from '../../common/dtos/output.dto';
import { Verification } from '../entities/verification.entity';
export declare class VerifyEmailOutput extends CommonOutput {
}
declare const VerifyEmailInput_base: import("@nestjs/common").Type<Pick<Verification, "code">>;
export declare class VerifyEmailInput extends VerifyEmailInput_base {
}
export {};
