import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-24">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          GenieAI: Jednoduché nástroje s umelou inteligenciou
        </h1>
        <p className="text-lg text-gray-600">
          Získaj prehľad, šetri čas a nechaj AI pracovať za teba.
        </p>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        {/* Sumarizátor PDF */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Sumarizátor PDF</h2>
          <p className="text-gray-500 mt-2">
            Nahraj dokument a získaj stručné zhrnutie za pár sekúnd.
          </p>
          <Link href="/pdf">
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
              Otvoriť nástroj
            </button>
          </Link>
        </div>

        {/* Generátor titulkov */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Generátor titulkov</h2>
          <p className="text-gray-500 mt-2">
            Vytvor virálne, chytľavé titulky na sociálne siete.
          </p>
          <Link href="/captions">
            <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
              Otvoriť nástroj
            </button>
          </Link>
        </div>

        {/* Prepis zvuku */}
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Prepis zvuku</h2>
          <p className="text-gray-500 mt-2">
            Nahraj hlasový záznam a získaj prepis do textu.
          </p>
          <Link href="/transcribe">
            <button className="mt-4 px-4 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700 transition">
              Otvoriť nástroj
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

