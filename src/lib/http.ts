const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

type HttpOptions = {
    signal?: AbortSignal;
}

export const httpGet = async <T>(path: string, options: HttpOptions = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'GET',
        ...options
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}