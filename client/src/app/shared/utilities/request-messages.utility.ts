export const setLoadingMessage = (subject: string, loadingMessageFn: (subject: string) => string) => {
    return { 'loading-message': loadingMessageFn(subject) };
};

export const setSuccessMessage = (subject: string, successMessageFn: (subject: string) => string) => {
    return { 'success-message': successMessageFn(subject) };
};

export const setErrorMessage = (subject: string, errorMessageFn: (subject: string) => string) => {
    return { 'error-message': errorMessageFn(subject) };
};
