import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo3ContentSection from "@/components/Modulo3ContentSection"


export default function Modulo3() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
      <Hero
        title="O Módulo 4"
        subtitle="Avaliação dos Resultados e Culminância do Projeto"
        />
        
      <Modulo3ContentSection />

      </main>
      <Footer />
    </div>
  )
}

