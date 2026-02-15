import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/matheasy_logo_nobg.png";

const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const Footer = () => (
  <footer style={{ background: `linear-gradient(135deg, hsl(var(--hero-dark)), hsl(var(--primary)))` }} className="text-primary-foreground">
    <div className="container-narrow mx-auto px-4 py-14 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="Matheasy" className="h-20 mb-5" />
          <p className="text-sm leading-relaxed opacity-75 mb-5">
            Matheasy provides focused coaching in Mathematics for TRB, SET, NET and TNPSC statistical examinations.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/@matheasy-rajasekar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition" aria-label="YouTube">
              <YouTubeIcon />
            </a>
            <a href="https://www.instagram.com/math_easy_academy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-5 font-display">Quick Links</h4>
          <div className="w-8 h-0.5 bg-accent mb-5 rounded-full" />
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Courses", path: "/courses" },
              { name: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="opacity-75 hover:opacity-100 transition-opacity">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-5 font-display">Contact</h4>
          <div className="w-8 h-0.5 bg-accent mb-5 rounded-full" />
          <div className="space-y-4 text-sm">
            <a href="tel:9345139579" className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 shrink-0" /> 9345139579
            </a>
            <a href="mailto:support@matheasy.in" className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 shrink-0" /> support@matheasy.in
            </a>
            <div className="flex items-start gap-3 opacity-75">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Mattuthavani, Madurai</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 mt-12 pt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} Matheasy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
