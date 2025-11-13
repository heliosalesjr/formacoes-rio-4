
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import AvaIntro from "./content/AvaIntro"

import CulmComo from "./content/CulmComo"
import CulmPossibilidades from "./content/CulmPossibilidades"
import CulmAprofundando from "./content/CulmAprofundando"
import CulmExemplos from "./content/CulmExemplos"



export default function CulminanciaContentSection() {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          
            
            
             <AvaIntro />
            
            <FadeInWhenVisible>
              <CulmComo />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CulmPossibilidades />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CulmAprofundando />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <CulmExemplos />
            </FadeInWhenVisible>
            

          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/registros">Próxima Página: Registros</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

