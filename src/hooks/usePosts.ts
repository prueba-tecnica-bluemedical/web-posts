import { useEffect, useState } from "react";
import { fetchPosts } from "../api/posts";
import type { IPost } from "../types/posts";

export const usePosts = (name?: string) => {
  const [data, setData] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetchPosts(name, ac.signal);
        setData(res);
      } catch (err: unknown) {
        if (isAbortError(err)) return;
        setError(errorMessage(err));
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, [name]);

  return { data, loading, error };
};


const isAbortError = (err: unknown): err is DOMException =>
  err instanceof DOMException && err.name === "AbortError";

const errorMessage = (err: unknown): string =>
  err instanceof Error ? err.message : typeof err === "string" ? err : "Unexpected error";
