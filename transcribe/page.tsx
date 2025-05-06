"use client";

import { useState } from "react";

export default function TranscribeAudio() {
  const [file, setFile] = useState<File | null>(null);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setTranscript(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/transcribe-audio", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setTranscript(data.transcript || "Prepis sa nepodarilo získať.");
    } catch (error) {
      setTranscript("Chyba pri spracovaní zvuku.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Prepis zvuku</h1>

      <label className="mb-4 block">
        <span className="text-sm font-medium text-gray-700">Nahrať súbor</span>
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full rounded border border-fuchsia-300 bg-fuchsia-50 text-fuchsia-800 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-fuchsia-600 file:text-white hover:file:bg-fuchsia-700"
        />
      </label>

      {file && <p className="text-sm text-gray-600 mb-4">Vybraný súbor: {file.name}</p>}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-fuchsia-600 text-white px-6 py-2 rounded hover:bg-fuchsia-700 transition"
      >
        {loading ? "Prepisujem..." : "Prepis zvuku"}
      </button>

      {transcript && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Výsledok:</h2>
          <p>{transcript}</p>
        </div>
      )}
    </main>
  );
}

