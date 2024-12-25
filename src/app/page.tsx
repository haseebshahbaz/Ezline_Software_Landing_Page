import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProjectManagement from './components/ProjectManagement'
import Services from './components/Services'
import DevLifecycle from './components/DevLifeCycle'
import Features from './components/Features'
import Clients from './components/Clients'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectManagement />
        <Services />
        <DevLifecycle />
        <Features />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}

