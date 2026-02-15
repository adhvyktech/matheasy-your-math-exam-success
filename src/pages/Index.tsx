import { BookOpen, Users, Target, HeadphonesIcon, Search, UserPlus, GraduationCap } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import ContactStrip from "@/components/ContactStrip";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Target, title: "Syllabus-Aligned Teaching", desc: "Based on official exam patterns and latest syllabus updates." },
  { icon: Users, title: "Experienced Faculty", desc: "Learn from experienced mathematics educators and subject experts." },
  { icon: BookOpen, title: "Concept Clarity", desc: "Exam-oriented preparation with deep conceptual understanding." },
  { icon: HeadphonesIcon, title: "Doubt Solving Support", desc: "Structured classes with dedicated doubt clarification sessions." },
];

const courses = [
  { title: "PG TRB Mathematics", description: "Full syllabus coverage for Tamil Nadu PG TRB mathematics examination.", path: "/courses/pg-trb-mathematics" },
  { title: "UG TRB Mathematics", description: "Core mathematics preparation for UG TRB examinations.", path: "/courses/ug-trb-mathematics" },
  { title: "TNPSC Combined Statistical Services", description: "Focused statistics syllabus coverage for TNPSC exams.", path: "/courses/tnpsc-statistical-services" },
  { title: "SET Mathematics", description: "State Eligibility Test preparation covering all key topics.", path: "/courses/set-mathematics" },
  { title: "NET Mathematics", description: "Comprehensive coaching for NET Mathematics with conceptual depth.", path: "/courses/net-mathematics" },
];

const steps = [
  { icon: Search, step: "01", title: "Enquiry & Counselling", desc: "Reach out to us and discuss your exam preparation goals." },
  { icon: UserPlus, step: "02", title: "Join Batch", desc: "Enrol in the appropriate course batch based on your target exam." },
  { icon: GraduationCap, step: "03", title: "Attend & Practice", desc: "Attend classes, practice problems and prepare with expert guidance." },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="relative text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.85)]" />
      </div>
      <div className="relative container-narrow mx-auto px-4 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 animate-fade-in-up">
          Master Competitive Mathematics<br className="hidden md:block" /> for Teaching & Eligibility Exams
        </h1>
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-8" style={{ animationDelay: "0.2s" }}>
          Coaching for PG TRB • UG TRB • TNPSC Statistical Services • SET Mathematics • NET Mathematics
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
          <a href="/courses" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition">
            Explore Courses
          </a>
          <a href="tel:9345139579" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition">
            Call: 9345139579
          </a>
        </div>
      </div>
    </section>

    {/* Why Matheasy */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-4">Why Matheasy?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">We focus on what matters — conceptual clarity, structured preparation and exam success.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Courses */}
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-4">Our Courses</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">Choose your exam preparation path in Mathematics.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.path} {...c} />
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider">Step {s.step}</span>
              <h3 className="font-bold text-foreground mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Results & Achievements */}
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-4">Results & Achievements</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">Our students share their success journey — from preparation at Matheasy to clearing PG TRB Mathematics.</p>
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-border shadow-lg aspect-video">
            <iframe
              src="https://www.youtube.com/embed/TTORanzCTyY"
              title="PG TRB Achievers Talk - Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>

    <ContactStrip />
  </>
);

export default Index;
