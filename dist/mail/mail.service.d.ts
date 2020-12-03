import { EmailVar, MailModuleOptions } from './mail.interfaces';
export declare class MailService {
    private readonly options;
    constructor(options: MailModuleOptions);
    sendEmail(subject: string, template: string, emailVars: EmailVar[], to: string): Promise<boolean>;
    sendVerificationEmail(email: string, to: string, code: string): Promise<void>;
}
