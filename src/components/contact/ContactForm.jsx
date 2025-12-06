import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate API call
      console.log('Form submitted:', formState);
      
      // Clear form fields
      setFormState({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setIsSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (hasError) => `
    w-full bg-nova-dark/50 border p-4 text-white placeholder-white/30 outline-none transition-all duration-300
    ${hasError 
      ? 'border-red-400/50 focus:border-red-400 focus:ring-1 focus:ring-red-400' 
      : 'border-white/10 focus:border-nova-peach focus:ring-1 focus:ring-nova-peach'}
  `;
  
  const labelClasses = "block text-sm font-display font-medium text-white/60 mb-2 uppercase tracking-wider";
  const errorClasses = "text-red-400 text-sm mt-1 flex items-center gap-1";

  if (isSubmitted) {
    return (
      <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 h-full min-h-[500px] flex flex-col items-center justify-center text-center relative group animate-in fade-in duration-500">
        
        {/* Decorative sharp corners */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-nova-peach"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-nova-peach"></div>
        
        <div className="w-20 h-20 bg-nova-peach/10 rounded-full flex items-center justify-center mb-6 text-nova-peach">
          <CheckCircle size={48} />
        </div>
        <h3 className="text-3xl font-display font-bold mb-4 text-white">Thank You!</h3>
        <p className="text-white/70 text-lg leading-relaxed max-w-md">
          Your message has been received. We will contact you shortly.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-8">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-12 relative group transition-all duration-300">
        {/* Decorative sharp corners */}
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/20 group-hover:border-nova-peach transition-colors duration-500"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/20 group-hover:border-nova-peach transition-colors duration-500"></div>

        <h3 className="text-2xl font-display font-bold mb-8 text-white">Send us a Message</h3>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className={labelClasses}>Name <span className="text-nova-peach">*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className={inputClasses(!!errors.name)}
                placeholder="Jane Doe"
              />
              {errors.name && <p className={errorClasses}><AlertCircle size={12} /> {errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className={labelClasses}>Email <span className="text-nova-peach">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className={inputClasses(!!errors.email)}
                placeholder="jane@company.com"
              />
              {errors.email && <p className={errorClasses}><AlertCircle size={12} /> {errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelClasses}>Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className={inputClasses(false)}
              placeholder="Acme Corp (Optional)"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClasses}>Message <span className="text-nova-peach">*</span></label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              className={inputClasses(!!errors.message)}
              placeholder="Tell us about your project needs..."
            />
            {errors.message && <p className={errorClasses}><AlertCircle size={12} /> {errors.message}</p>}
          </div>

          <div className="pt-4">
            <Button type="submit" size="lg" className="w-full md:w-auto group">
              Submit Inquiry
              <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </div>
        </form>
    </div>
  );
};

export default ContactForm