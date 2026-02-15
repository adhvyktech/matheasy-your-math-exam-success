import { Phone } from "lucide-react";

const ContactStrip = () => (
  <section className="bg-primary text-primary-foreground section-padding">
    <div className="container-narrow mx-auto text-center">
      <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">Ready to Start?</h3>
      <p className="text-sm opacity-80 mb-6">Get in touch for course details and batch information.</p>
      <a
        href="https://wa.me/919345139579"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition"
      >
        <Phone className="w-4 h-4" /> Call / WhatsApp: 9345139579
      </a>
    </div>
  </section>
);

export default ContactStrip;
