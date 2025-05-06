"use client";

import { useState } from "react";

export default function CaptionGenerator() {
  const [prompt, setPrompt] = useState("");
  const [caption, setCaption] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setCaption(null);

    const formData = new FormData();
    formData.append("prompt", prompt);

    try {
      const res = await fetch("http://localhost:8000/generate-caption", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setCaption(data.caption || "Nepodarilo sa vygenerovať titulok.");
    } catch (error) {
      setCaption("Chyba pri komunikácii so serverom.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Generátor titulkov</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Zadaj tému, produkt alebo myšlienku..."
        className="w-full h-24 p-4 border rounded mb-4 resize-none"
      />

      <button
        onClick={handleGenerate}
        disabled={!prompt || loading}
        className="px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
      >
        {loading ? "Generujem..." : "Vygeneruj titulok"}
      </button>

      {caption && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Výsledok:</h2>
          <p>{caption}</p>
        </div>
      )}
    </main>
  );
}

