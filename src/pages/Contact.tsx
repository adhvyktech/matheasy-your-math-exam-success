import { useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const WEB3FORMS_KEY = "150972ec-c57d-4077-8cb0-23c4ed9a9921";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(15).optional().or(z.literal("")),
  course: z.string().trim().min(1, "Select a course"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const courseOptions = [
  "PG TRB Mathematics",
  "UG TRB Mathematics",
  "TNPSC Combined Statistical Services",
  "SET Mathematics",
  "NET Mathematics",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Enquiry from ${result.data.name} — matheasy.in`,
          from_name: "Matheasy Contact Form",
          website: "matheasy.in",
          botcheck: "",
          name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || "Not provided",
          course: result.data.course,
          message: result.data.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Thanks! We'll get back to you soon.");
        setForm({ name: "", email: "", phone: "", course: "", message: "" });
      } else {
        toast.error("Oops! Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-8">Contact Matheasy</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="text-muted-foreground mb-6">Reach out for course details, batch information or any queries.</p>
            <div className="space-y-4">
              <a href="tel:9345139579" className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                9345139579
              </a>
              <a href="mailto:support@matheasy.in" className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                support@matheasy.in
              </a>
              <div className="flex items-start gap-3 text-foreground font-medium">
                <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Mattuthavani, Madurai</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 space-y-4">
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Course Interested In *</label>
              <select value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} className={inputClass}>
                <option value="">Select a course</option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.course && <p className="text-destructive text-xs mt-1">{errors.course}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
              <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
              {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Send Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
