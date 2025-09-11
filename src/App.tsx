import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { PostsPage } from "./pages/PostsPage";

const Placeholder = ({ title }: { title: string }) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="mt-4 h-72 rounded-xl bg-white/5" />
  </div>
);

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-gray-100 p-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <Navbar onSearch={setQuery} />
          <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="/posts" element={<PostsPage query={query} />} />
            <Route path="/summary" element={<Placeholder title={`Summary (q="${query}")`} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
