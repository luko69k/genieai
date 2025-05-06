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
        <div className="flex justify-center space-x-4">
          <Link href="/pdf">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
              Začni so sumarizátorom
            </button>
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold mt-2">Sumarizátor PDF</h2>
          <p className="text-gray-500 mt-2">
            Nahraj dokument a získaj stručné zhrnutie za pár sekúnd.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold mt-2">Generátor titulkov</h2>
          <p className="text-gray-500 mt-2">
            Tvor virálne titulky na sociálne siete pomocou AI.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 text-center hover:shadow-md transition">
          <h2 className="text-xl font-semibold mt-2">Prepis zvuku</h2>
          <p className="text-gray-500 mt-2">
            Nahraj hlasový záznam a získaj prepis do textu.
          </p>
        </div>
      </section>
    </main>
  );
}

