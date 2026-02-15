import ContactStrip from "@/components/ContactStrip";

const About = () => (
  <>
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">About Matheasy</h1>
        <div className="prose prose-lg text-muted-foreground space-y-5 text-base leading-relaxed">
          <p>
            Matheasy provides focused coaching in Mathematics for aspirants preparing for TRB, SET, NET and TNPSC statistical examinations. The institute aims to simplify complex mathematical concepts and help students prepare effectively through structured lessons, topic-wise practice and expert guidance.
          </p>
          <p>
            Our approach centres on conceptual clarity, exam-relevant preparation and consistent academic support. We believe every student can master competitive mathematics with the right guidance and structured practice.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: "Conceptual Clarity", desc: "Deep understanding over rote learning" },
            { label: "Exam-Relevant Prep", desc: "Aligned with official syllabus and patterns" },
            { label: "Consistent Support", desc: "Regular doubt solving and practice sessions" },
          ].map((item) => (
            <div key={item.label} className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactStrip />
  </>
);

export default About;
