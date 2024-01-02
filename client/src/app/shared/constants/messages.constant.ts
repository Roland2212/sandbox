// TODO: Add i18n

// LOADING MESSAGE

export const LOAD_MESSAGE = (subject: string) => {
    return `Loading ${subject}...`;
};

export const RETRIEVE_MESSAGE = (subject: string) => {
    return `Retrieving ${subject}...`;
};

export const CREATE_MESSAGE = (subject: string) => {
    return `Creating ${subject}...`;
};

export const UPDATE_MESSAGE = (subject: string) => {
    return `Updating ${subject}...`;
};

// SUCCESS MESSAGES

export const SUCCESS_LOAD_MESSAGE = (subject: string) => {
    return `Successfully loaded ${subject}`;
};

export const SUCCESS_RETRIEVE_MESSAGE = (subject: string) => {
    return `Successfully retrieved ${subject}`;
};

export const SUCCESS_CREATE_MESSAGE = (subject: string) => {
    return `Successfully created ${subject}`;
};

export const SUCCESS_UPDATE_MESSAGE = (subject: string) => {
    return `Successfully updated ${subject}`;
};

// ERROR MESSAGES

export const ERROR_LOAD_MESSAGE = (subject: string) => {
    return `Error occurred, while loading ${subject}`;
};

export const ERROR_RETRIEVE_MESSAGE = (subject: string) => {
    return `Error occurred, while retrieving ${subject}`;
};

export const ERROR_CREATE_MESSAGE = (subject: string) => {
    return `Error occurred, while creating ${subject}`;
};

export const ERROR_UPDATE_MESSAGE = (subject: string) => {
    return `Error occurred, while updating ${subject}`;
};
