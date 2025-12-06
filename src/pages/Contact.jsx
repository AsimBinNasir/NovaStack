import React from 'react'
import Header from '../components/Header'
import ContactInfo from '../components/contact/ContactInfo'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/Footer'
const Contact = () => {
    return (
        <div>
            <Header />
            <div className="pt-20 min-h-screen">
                {/* Contact Hero */}
                <section className="py-20 bg-linear-to-b from-nova-dark to-transparent relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-display tracking-widest text-nova-peach uppercase mb-6">
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
                            Let's Engineer <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-nova-peach to-white">your Future</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                            Whether you have a technical inquiry, a partnership proposal, or just want to say hello, we're ready to listen. Fill out the form below and a team member will be in touch within one business day.
                        </p>
                    </div>

                    {/* Background Element */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-nova-peach/5 rounded-[100%] blur-[100px] pointer-events-none"></div>
                </section>

                {/* Main Content */}
                <section className="pb-24 container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </section>
            </div>
            <Footer />

        </div>
    )
}

export default Contact