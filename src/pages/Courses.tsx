import CourseCard from "@/components/CourseCard";
import ContactStrip from "@/components/ContactStrip";

const courses = [
  { title: "PG TRB Mathematics", description: "Full syllabus coverage for Tamil Nadu PG TRB mathematics examination with advanced concept explanations.", path: "/courses/pg-trb-mathematics" },
  { title: "UG TRB Mathematics", description: "Strengthens undergraduate mathematics foundations for UG TRB examinations.", path: "/courses/ug-trb-mathematics" },
  { title: "TNPSC Combined Statistical Services", description: "Focused preparation for TNPSC Combined Statistical Services exam.", path: "/courses/tnpsc-statistical-services" },
  { title: "SET Mathematics", description: "State Eligibility Test preparation covering subject topics and exam strategy.", path: "/courses/set-mathematics" },
  { title: "NET Mathematics", description: "Comprehensive coaching for NET Mathematics with conceptual depth.", path: "/courses/net-mathematics" },
];

const Courses = () => (
  <>
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">Courses</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Choose your exam preparation path in Mathematics.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.path} {...c} />
          ))}
        </div>
      </div>
    </section>
    <ContactStrip />
  </>
);

export default Courses;
