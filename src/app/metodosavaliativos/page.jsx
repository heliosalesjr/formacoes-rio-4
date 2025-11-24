import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import MAContentSection from "@/components/MAContentSection"

export default function Smart() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero
                title="Avaliação"
                subtitle="Como realizar autoavaliação e avaliação em pares para promover a reflexão"
                />
        <MAContentSection />
      </main>
      <Footer />
    </div>
  )
}

