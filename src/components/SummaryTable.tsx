import type { IPostsCount } from "../types/posts";

type Props = {
  rows: IPostsCount[];
  loading?: boolean;
  error?: string | null;
};

export const SummaryTable: React.FC<Props> = ({ rows, loading, error }) => {
  if (loading) return <div className="text-sm text-gray-400">Cargando resumen…</div>;
  if (error) return <div className="text-sm text-red-400">Error: {error}</div>;
  if (!rows.length) return <div className="text-sm text-gray-400">Sin resultados.</div>;

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/40">
      <table className="min-w-[420px] w-full text-sm">
        <thead className="bg-white/5 text-gray-300">
          <tr>
            <th className="text-left px-4 py-2">Usuario</th>
            <th className="text-left px-4 py-2">Cantidad de Posts</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-white/10">
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2">{r.postCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
