
export const getApiBaseUrl = (settingsEndpoint?: string): string => {
    if (settingsEndpoint && settingsEndpoint.trim() !== '') {
        return settingsEndpoint;
    }
    return 'https://api.apizoo.top';
};
