import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import RegistrosContentSection from "@/components/RegistrosContentSection"
export default function Diagnostico() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Registros"
                subtitle="A importância dos registros para organizar a Culminância do Projeto"
                />
       
       <RegistrosContentSection />
      </main>
      <Footer />
    </div>
  )
}
