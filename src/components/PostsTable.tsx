import type { IPost } from "../types/posts";

type Props = {
  rows: IPost[];
  loading?: boolean;
  error?: string | null;
};

const fmt = (date: string | Date) =>
  new Date(date).toLocaleString();

export const PostsTable: React.FC<Props> = ({ rows, loading, error }) => {
  if (loading) return <div className="text-sm text-gray-400">Cargando posts…</div>;
  if (error) return <div className="text-sm text-red-400">Error: {error}</div>;
  if (!rows.length) return <div className="text-sm text-gray-400">Sin resultados.</div>;

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/40">
      <table className="min-w-[640px] w-full text-sm">
        <thead className="bg-white/5 text-gray-300">
          <tr>
            <th className="text-left px-4 py-2">Nombre</th>
            <th className="text-left px-4 py-2">Comentario</th>
            <th className="text-left px-4 py-2">Fecha</th>
            <th className="text-left px-4 py-2">ID</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((p) => (
            <tr key={p.id} className="border-t border-white/10">
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.comment}</td>
              <td className="px-4 py-2 whitespace-nowrap">{fmt(p.createdAt)}</td>
              <td className="px-4 py-2 text-xs text-gray-400">{p.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
