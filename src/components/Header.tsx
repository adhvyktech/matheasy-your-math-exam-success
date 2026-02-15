import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/matheasy_logo.png";

const courses = [
  { name: "PG TRB Mathematics", path: "/courses/pg-trb-mathematics" },
  { name: "UG TRB Mathematics", path: "/courses/ug-trb-mathematics" },
  { name: "TNPSC Combined Statistical Services", path: "/courses/tnpsc-statistical-services" },
  { name: "SET Mathematics", path: "/courses/set-mathematics" },
  { name: "NET Mathematics", path: "/courses/net-mathematics" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isCourseActive = courses.some((c) => location.pathname === c.path) || location.pathname === "/courses";

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm border-b border-border">
      <div className="container-narrow mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Matheasy logo" className="h-10 md:h-12" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground"}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-semibold transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-foreground"}`}>
            About
          </Link>

          {/* Courses dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary ${isCourseActive ? "text-primary" : "text-foreground"}`}>
              Courses <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <div className="bg-card rounded-lg shadow-lg border border-border py-2 w-72">
                <Link to="/courses" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-primary-lighter hover:text-primary transition-colors">
                  All Courses
                </Link>
                <div className="border-t border-border my-1" />
                {courses.map((c) => (
                  <Link key={c.path} to={c.path} className="block px-4 py-2 text-sm text-foreground hover:bg-primary-lighter hover:text-primary transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/contact" className={`text-sm font-semibold transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-foreground"}`}>
            Contact
          </Link>
        </nav>

        {/* Phone + mobile toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:9345139579" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 9345139579
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-foreground hover:text-primary">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-foreground hover:text-primary">About</Link>
            <button onClick={() => setCoursesOpen(!coursesOpen)} className="flex items-center justify-between py-2 text-sm font-semibold text-foreground hover:text-primary">
              Courses <ChevronDown className={`w-4 h-4 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
            </button>
            {coursesOpen && (
              <div className="pl-4 flex flex-col gap-1">
                <Link to="/courses" onClick={() => setMobileOpen(false)} className="py-1.5 text-sm text-muted-foreground hover:text-primary">All Courses</Link>
                {courses.map((c) => (
                  <Link key={c.path} to={c.path} onClick={() => setMobileOpen(false)} className="py-1.5 text-sm text-muted-foreground hover:text-primary">
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-foreground hover:text-primary">Contact</Link>
            <a href="tel:9345139579" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
              <Phone className="w-4 h-4" /> 9345139579
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
