import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import CulminanciaContentSection from "@/components/CulminanciaContentSection"

export default function Culminancia() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Culminância"
                subtitle="Como apresentar os resultados do projeto para a comunidade, e tornar esse momento significativo para os estudantes"
                />
        
        <CulminanciaContentSection />
      </main>
      <Footer />
    </div>
  )
}

