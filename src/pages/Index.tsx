import { Link } from "react-router-dom";
import {
  BookOpen, Users, Target, HeadphonesIcon, Search, UserPlus, GraduationCap,
  ArrowRight, CheckCircle2, Lightbulb, Route, Compass, Shield, BarChart3, Brain
} from "lucide-react";
import CourseCard from "@/components/CourseCard";
import ContactStrip from "@/components/ContactStrip";
import MathPattern from "@/components/MathPattern";
import SuccessStories from "@/components/SuccessStories";
import GoogleReviews from "@/components/GoogleReviews";
import mathIllustration from "@/assets/math-illustration.png";

/* ─── Data ─── */
const examBadges = ["PG TRB", "UG TRB", "TNPSC", "SET", "NET Mathematics"];

const statHighlights = [
  { icon: Users, label: "Experienced Faculty" },
  { icon: BookOpen, label: "Structured Maths Preparation" },
  { icon: Target, label: "Exam-Oriented Teaching" },
  { icon: Shield, label: "Trusted by Aspirants" },
];

const programs = [
  { title: "PG TRB Mathematics", desc: "Full syllabus coverage for Tamil Nadu PG TRB mathematics examination with advanced concept explanations.", path: "/courses/pg-trb-mathematics", color: "bg-primary" },
  { title: "UG TRB Mathematics", desc: "Strengthens undergraduate mathematics foundations for UG TRB examinations.", path: "/courses/ug-trb-mathematics", color: "bg-accent" },
  { title: "TNPSC Combined Statistical Services", desc: "Focused preparation for TNPSC Combined Statistical Services exam.", path: "/courses/tnpsc-statistical-services", color: "bg-primary-light" },
  { title: "SET Mathematics", desc: "State Eligibility Test preparation covering subject topics and exam strategy.", path: "/courses/set-mathematics", color: "bg-accent-warm" },
  { title: "NET Mathematics", desc: "Comprehensive coaching for NET Mathematics with conceptual depth.", path: "/courses/net-mathematics", color: "bg-primary" },
];

const features = [
  { icon: Target, title: "Syllabus-Aligned Teaching", desc: "Based on official exam patterns and latest syllabus updates." },
  { icon: Users, title: "Experienced Faculty", desc: "Learn from experienced mathematics educators and subject experts." },
  { icon: BookOpen, title: "Concept Clarity", desc: "Exam-oriented preparation with deep conceptual understanding." },
  { icon: HeadphonesIcon, title: "Doubt Solving Support", desc: "Structured classes with dedicated doubt clarification sessions." },
];

const steps = [
  { icon: Search, step: "01", title: "Enquiry & Counselling", desc: "Reach out to us and discuss your exam preparation goals." },
  { icon: UserPlus, step: "02", title: "Join Batch", desc: "Enrol in the appropriate course batch based on your target exam." },
  { icon: GraduationCap, step: "03", title: "Attend & Practice", desc: "Attend classes, practice problems and prepare with expert guidance." },
];

const differentiators = [
  { icon: Brain, title: "Concept First Approach", desc: "Building deep understanding before exam technique." },
  { icon: GraduationCap, title: "Mathematics Specialists Only", desc: "Faculty focused exclusively on competitive mathematics." },
  { icon: Route, title: "Structured Learning Path", desc: "Progressive curriculum from basics to advanced topics." },
  { icon: Compass, title: "Focused Exam Strategy", desc: "Targeted preparation for each specific exam pattern." },
  { icon: Shield, title: "Supportive Academic Environment", desc: "Encouraging atmosphere for sustained preparation." },
  { icon: BarChart3, title: "Clear Topic Progression", desc: "Transparent syllabus tracking and milestone reviews." },
];

const successPoints = [
  "Concept-driven teaching methodology",
  "Step-by-step exam preparation",
  "Regular academic guidance & mentorship",
  "Focus on mathematical clarity & precision",
];

/* ─── Page ─── */
const Index = () => (
  <>
    {/* ═══ HERO ═══ */}
    <section className="relative overflow-hidden text-primary-foreground">
      {/* Background banner image */}
      <div className="absolute inset-0">
        <img src={mathIllustration} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, hsl(var(--hero-dark) / 0.92), hsl(var(--hero-mid) / 0.88), hsl(var(--primary) / 0.85))` }} />
      </div>
      <MathPattern className="text-primary-foreground" />
      <div className="relative container-narrow mx-auto px-4 py-24 md:py-32 lg:py-40 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6 animate-fade-in-up">
          Master Competitive Mathematics<br className="hidden md:block" /> for Teaching & Eligibility Exams
        </h1>
        <p className="text-base md:text-lg opacity-85 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>
          Specialized coaching that transforms mathematical understanding into exam success.
        </p>
        {/* Exam badges */}
        <div className="flex flex-wrap gap-2 justify-center mb-8" style={{ animationDelay: "0.25s" }}>
          {examBadges.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
              ✔ {b}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: "0.35s" }}>
          <Link to="/courses" className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition">
            Explore Courses <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:9345139579" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition">
            Call: 9345139579
          </a>
        </div>

        {/* Stat highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {statHighlights.map((s) => (
            <div key={s.label} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <s.icon className="w-5 h-5 text-accent shrink-0" />
              <span className="text-primary-foreground text-sm font-medium leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ EXAM FOCUSED PROGRAMS ═══ */}
    <section className="section-padding bg-background math-dots-pattern">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-3">
          Focused Programs for Every Mathematics Career Path
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Choose the exam path that matches your career goal. Each program is structured around the official syllabus.</p>
        <div className="space-y-4">
          {programs.map((p, i) => (
            <Link
              key={p.path}
              to={p.path}
              className={`group flex items-stretch rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 ${i % 2 === 0 ? "bg-card" : "section-alt-bg"}`}
            >
              <div className={`w-1.5 shrink-0 ${p.color}`} />
              <div className="flex-1 flex items-center justify-between px-6 py-5 gap-4">
                <div>
                  <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{p.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SUCCESS STORIES ═══ */}
    <SuccessStories />

    {/* ═══ WHY MATHEASY ═══ */}
    <section className="section-padding section-alt-bg">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-3">Why Matheasy?</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto italic">
          "Preparation is not just about studying — it's about studying the right way."
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-primary">
              <div className="w-14 h-14 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ HOW IT WORKS — Timeline ═══ */}
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-14">How It Works</h2>
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-0.5 bg-border" />
          {steps.map((s, i) => (
            <div key={s.step} className="flex-1 flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 shadow-lg ring-4 ring-background">
                <span className="text-primary-foreground font-bold text-lg">{s.step}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[220px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ STUDENT SUCCESS & LEARNING EXPERIENCE ═══ */}
    <section className="section-padding section-alt-bg">
      <div className="container-narrow mx-auto">
        <p className="text-center text-accent font-semibold text-sm uppercase tracking-wider mb-2">Results that Speak</p>
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-3">Student Success & Learning Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Our students share their success journey — from preparation at Matheasy to clearing PG TRB Mathematics.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <div className="relative rounded-xl overflow-hidden border border-border shadow-lg aspect-video">
            <iframe
              src="https://www.youtube.com/embed/TTORanzCTyY"
              title="PG TRB Achievers Talk - Success Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          {/* Highlights */}
          <div>
            <blockquote className="text-lg font-display text-foreground italic border-l-4 border-accent pl-4 mb-8">
              "Real preparation shows in real results."
            </blockquote>
            <ul className="space-y-4">
              {successPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ WHAT MAKES MATHEASY DIFFERENT ═══ */}
    <section className="section-padding bg-background math-dots-pattern">
      <div className="container-narrow mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-3">What Makes Matheasy Different</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">A mathematics-only institute built for competitive exam aspirants.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div key={d.title} className="bg-card rounded-xl border border-border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary-lighter flex items-center justify-center mb-4">
                <d.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1.5">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ GOOGLE REVIEWS ═══ */}
    <GoogleReviews />

    <ContactStrip />
  </>
);

export default Index;
