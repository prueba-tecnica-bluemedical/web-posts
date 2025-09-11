export const isAbortError = (err: unknown): err is DOMException =>
  err instanceof DOMException && err.name === "AbortError";

export const errorMessage = (err: unknown): string =>
  err instanceof Error ? err.message : typeof err === "string" ? err : "Unexpected error";
