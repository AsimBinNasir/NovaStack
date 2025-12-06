import React from 'react'
import Header from '../components/Header'
import AboutHero from '../components/about/AboutHero'
import Journey from '../components/about/Journey'
import Team from '../components/about/Team'
import Principles from '../components/about/Principles'
import AboutCTA from '../components/about/AboutCTA'
import Footer from '../components/Footer'
const About = () => {
    return (
        <div>
            <Header />
            <AboutHero />
            <Journey />
            <Team />
            <Principles />
            <AboutCTA />
            <Footer />
        </div>
    )
}

export default About