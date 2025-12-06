import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">
                <Hero />
                <Services />
                <Testimonials />
                <CallToAction />
            </main>
            <Footer />
        </div>
    )
}

export default Home