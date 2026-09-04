import React from "react";
import ScrollReveal from "./ui/ScrollReveal";

export default function ContactForm() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <ScrollReveal direction="up" className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl sm:text-3xl text-black uppercase leading-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-[#555] font-medium text-sm sm:text-base leading-relaxed mb-10 max-w-[50%] sm:max-w-[65%] lg:max-w-[240px]">
              Ready to bring your book to life? Reach out to us today to discuss your project, get a custom quote, or simply ask a question. Our team is here to help you every step of the way.
            </p>

            <div className="flex flex-col gap-8">
              {/* Phone */}
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-black text-sm uppercase mb-1">Call Us</p>
                  <a href="tel:+15551234567" className="text-[#555] text-sm hover:text-black transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-black text-sm uppercase mb-1">Email Us</p>
                  <a href="mailto:info@hearstbookstudio.com" className="text-[#555] text-sm hover:text-black transition-colors">info@hearstbookstudio.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center rounded-sm flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-black text-sm uppercase mb-1">Location</p>
                  <p className="text-[#555] text-sm">123 Publishing Way, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-6 sm:p-10 border border-gray-200 drop-shadow-md rounded-md">
            <form onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <label htmlFor="name" className="block font-bold text-xs uppercase text-black mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full h-12 px-4 border border-gray-300 text-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block font-bold text-xs uppercase text-black mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full h-12 px-4 border border-gray-300 text-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <label htmlFor="phone" className="block font-bold text-xs uppercase text-black mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-12 px-4 border border-gray-300 text-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="service" className="block font-bold text-xs uppercase text-black mb-2">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full h-12 px-4 border border-gray-300 text-sm text-gray-700 focus:border-black focus:outline-none transition-colors appearance-none bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="book-publishing">Book Publishing</option>
                    <option value="children-book-publishing">Children Book Publishing</option>
                    <option value="illustrations">Illustrations</option>
                    <option value="ghostwriting">Ghostwriting</option>
                    <option value="book-editing-formatting">Book Editing &amp; Formatting</option>
                    <option value="global-distribution">Global Distribution</option>
                    <option value="comic-book-publishing">Comic Book Publishing</option>
                    <option value="religious-publishing">Religious Publishing</option>
                    <option value="book-marketing">Book Marketing</option>
                    <option value="audiobook-production">Audiobook Production</option>
                    <option value="book-video">Book Video</option>
                    <option value="author-website">Author Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-bold text-xs uppercase text-black mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell us about your book..."
                  className="w-full p-4 border border-gray-300 text-sm focus:border-black focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full h-14 bg-black text-white font-bold text-sm uppercase tracking-wide hover:bg-[#3075ba] transition-colors"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
