


import EncerramentoAprendi from "./content/EncerramentoAprendi"
import EncerramentoQuiz from "./content/EncerramentoQuiz"
import EncerramentoIntro from "./content/EncerramentoIntro"
import EncerramentoAdeus from "./content/EncerramentoAdeus"


export default function EncerramentoContentSection() {
    return (
      <section id="content" className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8 mb-16">
     
              <EncerramentoIntro />
              <EncerramentoQuiz />
              <EncerramentoAprendi />
              <EncerramentoAdeus />
                
          </div>
        </div>
      </section>
    )
  }