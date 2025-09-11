import { useEffect, useState } from "react";
import { fetchPostsSummary } from "../api/posts";
import type { IPostsCount } from "../types/posts";
import { errorMessage, isAbortError } from "../utils/errors";

export const useSummary = (name?: string) => {
  const [data, setData] = useState<IPostsCount[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const rows = await fetchPostsSummary(name, ac.signal);
        setData(rows);
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
