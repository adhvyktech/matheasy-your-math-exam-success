import { useParams, Navigate } from "react-router-dom";
import { CheckCircle, BookOpen } from "lucide-react";
import { courseData } from "@/data/courseData";
import ContactStrip from "@/components/ContactStrip";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = courseData.find((c) => c.slug === slug);

  if (!course) return <Navigate to="/courses" replace />;

  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">{course.title}</h1>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">{course.intro}</p>

          {/* Features */}
          <div className="bg-card border border-border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold font-display text-foreground mb-4">Course Features</h2>
            <ul className="space-y-3">
              {course.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Syllabus */}
          <div className="bg-primary-lighter rounded-xl p-6">
            <h2 className="text-xl font-bold font-display text-foreground mb-4">Syllabus Highlights</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.syllabus.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <BookOpen className="w-4 h-4 text-primary shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactStrip />
    </>
  );
};

export default CoursePage;
