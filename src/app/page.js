import Navbar from "@/components/Navbar"
import HeroMain from "@/components/HeroMain"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo3ContentSection from "@/components/Modulo3ContentSection"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
      <HeroMain
          title="Formação Material de Educação Financeira"

          
        />
        
      <Modulo3ContentSection />

      </main>
      <Footer />
    </div>
  )
}


