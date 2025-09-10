import { httpGet } from "../lib/http";
import type { IPost, IPostsCount } from "../types/posts";

export const fetchPosts = (name?: string, signal?: AbortSignal) => {
    const query = name?.trim() ? `?name=${encodeURIComponent(name)}` : '';
    return httpGet<IPost[]>(`/posts${query}`, { signal });
};

export const fetchPostsSummary = (name?: string, signal?: AbortSignal) => {
    const query = name?.trim() ? `?name=${encodeURIComponent(name)}` : '';
    return httpGet<IPostsCount[]>(`/posts/summary${query}`, { signal });
};
