import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  course: z.string().trim().min(1, "Select a course"),
  message: z.string().trim().max(1000).optional(),
});

const courseOptions = [
  "PG TRB Mathematics",
  "UG TRB Mathematics",
  "TNPSC Combined Statistical Services",
  "SET Mathematics",
  "NET Mathematics",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
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
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", phone: "", course: "", message: "" });
  };

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
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Course Interested In</label>
              <select
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a course</option>
                {courseOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.course && <p className="text-destructive text-xs mt-1">{errors.course}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
