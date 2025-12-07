import React from 'react';
import { Cloud, ShieldCheck, Cpu, Code, RefreshCw, Zap } from 'lucide-react';
import ServicesCard  from './ServicesCard';

const services = [
  {
    title: "Cloud-Native Migration",
    description: "Seamless transition to modern, scalable public cloud environments (AWS, Azure, GCP).",
    icon: Cloud,
  },
  {
    title: "Advanced Data Security",
    description: "Implementing zero-trust architectures, encryption, and compliance monitoring.",
    icon: ShieldCheck,
  },
  {
    title: "AI/ML Integration",
    description: "Building custom models and pipelines for predictive analytics and process automation.",
    icon: Cpu,
  },
  {
    title: "DevOps & Automation",
    description: "Establishing CI/CD pipelines, infrastructure-as-code (IaC), and rapid deployment.",
    icon: Code,
  },
  {
    title: "Legacy System Modernization",
    description: "Refactoring older systems into modular, API-first microservices.",
    icon: RefreshCw,
  },
  {
    title: "Edge Computing & IoT",
    description: "Bring computation and data storage closer to the sources of data for faster response times.",
    icon: Zap,
  }
];
export const ServicesList = () => {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Core Engineering Disciplines</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServicesCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesList