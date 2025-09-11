import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { usePosts } from "../hooks/usePosts";
import { PostsTable } from "../components/PostsTable";

type Props = { query: string };

export const PostsPage: React.FC<Props> = ({ query }) => {
  const debounced = useDebouncedValue(query, 400);
  const { data, loading, error } = usePosts(debounced);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Posts</h2>
      <PostsTable rows={data} loading={loading} error={error} />
    </section>
  );
};
