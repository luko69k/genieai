import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-24">
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          GenieAI: Jednoduché nástroje poháňané umelou inteligenciou
        </h1>
        <p className="text-lg text-gray-600">
          Ušetri čas a energiu s AI nástrojmi pre každodenné úlohy. Sumarizuj PDF, generuj titulky, prepíš zvuk na text.
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Začni zdarma</Button>
          <Button variant="outline" size="lg">
            Zobraziť nástroje
          </Button>
        </div>
      </section>

      <section className="mt-20 grid gap-8 md:grid-cols-3">
        <Card className="hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Sparkles className="mx-auto h-10 w-10 text-indigo-600" />
            <h2 className="text-xl font-semibold mt-4">Sumarizátor PDF</h2>
            <p className="text-gray-500 mt-2">
              Nahraj dokument a získaj stručné zhrnutie za pár sekúnd.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Sparkles className="mx-auto h-10 w-10 text-indigo-600" />
            <h2 className="text-xl font-semibold mt-4">Generátor titulkov</h2>
            <p className="text-gray-500 mt-2">
              Tvor zaujímavé a virálne titulky na sociálne siete.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-xl transition">
          <CardContent className="p-6 text-center">
            <Sparkles className="mx-auto h-10 w-10 text-indigo-600" />
            <h2 className="text-xl font-semibold mt-4">Prepis zvuku</h2>
            <p className="text-gray-500 mt-2">
              Nahraj hlas a získaj automatický textový prepis.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

