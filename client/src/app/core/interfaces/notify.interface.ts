export interface NotifyData {
    icon: string;
    message: string;
}

export enum NotifyType {
    DEFAULT = 'default',
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
}
