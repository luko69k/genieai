"use client";

import { useState } from "react";

export default function PDFSummarizer() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    console.log("Uploading file:", file);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/summarize-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Server response:", data);
      setSummary(data.summary || "Zhrnutie sa nepodarilo vygenerovať.");
    } catch (error) {
      console.error("Chyba pri odoslaní požiadavky:", error);
      setSummary("Chyba pri spracovaní PDF.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Sumarizátor PDF</h1>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 block w-full"
      />
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

