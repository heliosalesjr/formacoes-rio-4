import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FadeInWhenVisible from "./FadeInWhenVisible"
import MetAvaIntro from './content/MetAvaIntro'
import MAReflex from './content/MAReflex'
import MARubrica from './content/MARubrica'
import MAPorQue from './content/MAPorQue'
import MAApplicacao from './content/MAAplicacao'
import MAAvPares from './content/MAAVPares'
import MAHabilidades from './content/MAHabilidades'
import MAPlanejamento from './content/MAPlanejamento'


const MAContentSection = () => {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
         
            <MetAvaIntro />
          
          <FadeInWhenVisible>
            <MAReflex />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <MARubrica />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <MAPorQue />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <MAHabilidades />
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <MAApplicacao />
          </FadeInWhenVisible>
            
          <FadeInWhenVisible>
            <MAPlanejamento />
          </FadeInWhenVisible>
            
          <FadeInWhenVisible>
            <MAAvPares />
          </FadeInWhenVisible>

            
            
          
          {/* Next Page Button */}
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/culminancia">Próxima Página: Culminância</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MAContentSection