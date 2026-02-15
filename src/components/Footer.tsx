import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/matheasy_logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow mx-auto px-4 py-12 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Matheasy" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed opacity-80">
            Matheasy provides focused coaching in Mathematics for TRB, SET, NET and TNPSC statistical examinations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 font-display">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Courses", path: "/courses" },
              { name: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="opacity-80 hover:opacity-100 transition-opacity">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-4 font-display">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:9345139579" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4" /> 9345139579
            </a>
            <a href="mailto:support@matheasy.in" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4" /> support@matheasy.in
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Matheasy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
