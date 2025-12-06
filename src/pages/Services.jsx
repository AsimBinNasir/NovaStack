import React from 'react'
import Header from '../components/Header'
import ServicesHero from '../components/services/ServicesHero'
import ServicesList from '../components/services/ServicesList'
import Process from '../components/services/Process'
import AboutCTA from '../components/about/AboutCTA'
import Footer from '../components/Footer'
const Services = () => {
  return (
    <div>
      <Header />
      <div className="pt-20 min-h-screen">
        <ServicesHero />
        <ServicesList />
        <Process />
        <AboutCTA />
      </div>
      <Footer />
    </div>
  )
}

export default Services