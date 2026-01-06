
/**
 * Helper function to get the API base URL.
 * Defaults to 'https://api.apizoo.top' if no settings endpoint is provided.
 * @param settingsEndpoint - The endpoint URL from settings.
 * @returns The API base URL to use.
 */
export const getApiBaseUrl = (settingsEndpoint?: string): string => {
    if (settingsEndpoint && settingsEndpoint.trim() !== '') {
        return settingsEndpoint.replace(/\/+$/, ''); // Remove trailing slashes
    }
    return 'https://api.apizoo.top';
};
