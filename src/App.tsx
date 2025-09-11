import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { PostsPage } from "./pages/PostsPage";
import { SummaryPage } from "./pages/SummaryPage";

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
            <Route path="/summary" element={<SummaryPage query={query} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
