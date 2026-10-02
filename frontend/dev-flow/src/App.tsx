import Header from './Components/Header'
import HeroSection from './Components/HeroSection'

import FeaturesSection from './Components/FeaturesSection'
import AISection from './Components/AISection'
import IntegrationsSection from './Components/IntegrationsSection'
import TestimonialsSection from './Components/TestimonialsSection'
import PricingSection from './Components/PricingSection'
import CTASection from './Components/CTASection'
import FAQSection from './Components/FAQSection'
import Footer from './Components/Footer'

import './App.css'
import './LandingSections.css'

function App() {
  return (
    <div className="app">

      <Header />

      <HeroSection />

      <FeaturesSection />

      <AISection />

      <IntegrationsSection />

      <TestimonialsSection />

      <PricingSection />

      <CTASection />

      <FAQSection />

      <Footer />

    </div>
  )
}

export default App