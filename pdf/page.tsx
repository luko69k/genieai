"use client";

import { useState } from "react";

export default function PDFSummarizer() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setSummary(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/summarize-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setSummary(data.summary || "Nepodarilo sa získať zhrnutie.");
    } catch (error) {
      setSummary("Chyba pri komunikácii so serverom.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Sumarizátor PDF</h1>

      <label className="mb-4 block">
        <span className="text-sm font-medium text-gray-700">Nahrať súbor</span>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full rounded border border-indigo-300 bg-indigo-50 text-indigo-800 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
        />
      </label>

      {file && <p className="text-sm text-gray-600 mb-4">Vybraný súbor: {file.name}</p>}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        {loading ? "Spracovávam..." : "Nahrať a zhrnúť"}
      </button>

      {summary && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Zhrnutie:</h2>
          <p>{summary}</p>
        </div>
      )}
    </main>
  );
}

