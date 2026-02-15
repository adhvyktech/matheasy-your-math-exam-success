import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ContactStrip from "@/components/ContactStrip";

const courses = [
  { title: "PG TRB Mathematics", description: "Full syllabus coverage for Tamil Nadu PG TRB mathematics examination with advanced concept explanations.", path: "/courses/pg-trb-mathematics", color: "bg-primary" },
  { title: "UG TRB Mathematics", description: "Strengthens undergraduate mathematics foundations for UG TRB examinations.", path: "/courses/ug-trb-mathematics", color: "bg-accent" },
  { title: "TNPSC Combined Statistical Services", description: "Focused preparation for TNPSC Combined Statistical Services exam.", path: "/courses/tnpsc-statistical-services", color: "bg-primary-light" },
  { title: "SET Mathematics", description: "State Eligibility Test preparation covering subject topics and exam strategy.", path: "/courses/set-mathematics", color: "bg-accent-warm" },
  { title: "NET Mathematics", description: "Comprehensive coaching for NET Mathematics with conceptual depth.", path: "/courses/net-mathematics", color: "bg-primary" },
];

const Courses = () => (
  <>
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-3">Courses</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Choose your exam preparation path in Mathematics.</p>
        <div className="space-y-4">
          {courses.map((c, i) => (
            <Link
              key={c.path}
              to={c.path}
              className={`group flex items-stretch rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 ${i % 2 === 0 ? "bg-card" : "section-alt-bg"}`}
            >
              <div className={`w-1.5 shrink-0 ${c.color}`} />
              <div className="flex-1 flex items-center justify-between px-6 py-5 gap-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{c.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <ContactStrip />
  </>
);

export default Courses;
