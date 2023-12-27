import { LOADING_MESSAGE } from '@shared/constants/messages.constant';

export const setLoadingMessage = (subject: string) => {
    return { 'loading-message': LOADING_MESSAGE(subject) };
};

export const setSuccessMessage = (subject: string) => {
    return { 'success-message': 'Success' };
};

export const setErrorMessage = (subject: string) => {
    return { 'error-message': 'Error' };
};
