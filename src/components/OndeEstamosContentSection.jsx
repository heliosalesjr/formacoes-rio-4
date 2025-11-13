import { Button } from "@/components/ui/button"
import FadeInWhenVisible from "./FadeInWhenVisible"
import Link from "next/link"

import OndeEstamosIntro from "./content/OndeEstamosIntro"
import OEppda68 from "./content/OEppda68"
import OEPratica from "./content/OEPratica"



export default function OndeEstamos() {
    return (
      <section id="content" className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">


              <OndeEstamosIntro />
              <FadeInWhenVisible>
                <OEppda68 />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <OEPratica />
              </FadeInWhenVisible>
              
             
                  
     
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/metodosavaliativos">Próxima Página: Métodos Avaliativos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  