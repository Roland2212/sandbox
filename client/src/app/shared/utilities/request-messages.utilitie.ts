import { LOADING_MESSAGE } from '@shared/constants/messages.constant';

export const setLoadingMessage = (subject: string) => {
    return { 'loading-message': LOADING_MESSAGE(subject) };
};
