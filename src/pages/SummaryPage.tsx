import { useDebouncedValue } from "../hooks/useDebouncedValue";
import { useSummary } from "../hooks/useSummary";
import { SummaryTable } from "../components/SummaryTable";

type Props = { query: string };

export const SummaryPage: React.FC<Props> = ({ query }) => {
  const debounced = useDebouncedValue(query, 400);
  const { data, loading, error } = useSummary(debounced);

  return (
    <section className="space-y-3">
      <h2 className="text-lg font-semibold">Summary</h2>
      <SummaryTable rows={data} loading={loading} error={error} />
    </section>
  );
};
