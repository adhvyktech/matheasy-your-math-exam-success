import { Phone } from "lucide-react";
import MathPattern from "./MathPattern";

const ContactStrip = () => (
  <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--hero-mid)))` }}>
    <MathPattern className="text-primary-foreground" />
    <div className="relative container-narrow mx-auto px-4 py-16 text-center text-primary-foreground">
      <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">Ready to Start Your Preparation?</h3>
      <p className="text-sm opacity-80 mb-8 max-w-lg mx-auto">Get in touch for course details, batch information and personalized guidance.</p>
      <a
        href="https://wa.me/919345139579"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition shadow-lg"
      >
        <Phone className="w-4 h-4" /> Call / WhatsApp: 9345139579
      </a>
    </div>
  </section>
);

export default ContactStrip;
