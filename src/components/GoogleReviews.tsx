import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Shakeela Fathima",
    initial: "S",
    rating: 5,
    time: "a month ago",
    text: "Very good teaching. Wonderful explanation by Rajasekar sir. Even me a correspondence student in maths learned maths from Raja sir only. Deep study in our academy. The best academy is math easy academy. I am a proud student of Raja sir.",
  },
  {
    name: "Jayanthi Jackson",
    initial: "J",
    rating: 5,
    time: "a month ago",
    text: 'This "Math Easy Academy" really made maths as easy one as along with understanding. Easily accessible, available at any time, Home makers as like me study with their convenient time. Tests are really really worthable, push me to study more.',
  },
  {
    name: "Suba A",
    initial: "S",
    rating: 5,
    time: "a month ago",
    text: "Very satisfied with Math Easy Academy team especially Rajasekar sir. Excellent teaching. Their teaching approaches is very helpful for strong fundamentals.",
  },
  {
    name: "Vijaya G",
    initial: "V",
    rating: 5,
    time: "a month ago",
    text: "Excellent teaching... Very difficult and hard topics are explaining clearly and we are understandable easily.",
  },
  {
    name: "Malathi Raja",
    initial: "M",
    rating: 5,
    time: "a month ago",
    text: "This coaching centre is super awesome.. it's hard to find a tutor who helps us understand the concepts, encourage us to ask questions, assess the students frequently and available at any time to clarify our doubts.. and it's really helpful the trick we get from Mr.Rajasekar as he was the early topper and it's works very well.",
  },
  {
    name: "Vikranth",
    initial: "V",
    rating: 5,
    time: "a month ago",
    text: "Math Easy Academy is trustworthy and truly makes difficult maths concepts easy. With high-quality teaching and well-crafted test questions, recorded sessions for flexible learning. Our sir's mentorship inspires and guides students to make the most of their learning journey.",
  },
  {
    name: "Vanitha",
    initial: "V",
    rating: 5,
    time: "a month ago",
    text: "On seeing your vidioes on YouTube only, I choose my pgtrb course in your centre. Raja sir you are the best mentor. Many times I wonder your indepth explanation and teaching. You are such a dedicated and inspiring personality!!!",
  },
  {
    name: "Banu Mathi",
    initial: "B",
    rating: 5,
    time: "a month ago",
    text: "Math Easy Academy coaching center of online class is very useful for TRB beginners. From basic concept to TRB syllabus class is very clearly teaching. Test also slip test and unit test, test discussion is very excellent sir.",
  },
  {
    name: "Kalaiselvi S",
    initial: "K",
    rating: 5,
    time: "a month ago",
    text: '"Top-class coaching for competitive exams! Structured classes + regular tests = results! Thanks Math Easy Academy, Madurai."',
  },
  {
    name: "Suganya D",
    initial: "S",
    rating: 5,
    time: "a month ago",
    text: "It's the place where u can get government job along with subject knowledge, it is the 1st time that I'm seeing like this excellent coaching centre in south India.",
  },
  {
    name: "Dhatchu Ravi",
    initial: "D",
    rating: 5,
    time: "a month ago",
    text: "They teach the subject in a clear and understandable manner and charge a reasonable fees. I am glad I chose a good academy.",
  },
  {
    name: "Kalyan Sundaram",
    initial: "K",
    rating: 5,
    time: "a month ago",
    text: "Memory make us difficult to learn more. But our math easy Raja sir will make it easy by explaining the concept.",
  },
  {
    name: "Kani Mozhi",
    initial: "K",
    rating: 5,
    time: "a month ago",
    text: "Math easy academy is the best academy for Trb coaching..",
  },
];

const GoogleReviews = () => {
  const [page, setPage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const perPage =
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 3
      : window.innerWidth >= 640
        ? 2
        : 1;
  const totalPages = Math.ceil(reviews.length / perPage);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (transitioning) return;
      setTransitioning(true);
      setPage((p) => (p + dir + totalPages) % totalPages);
      setTimeout(() => setTransitioning(false), 400);
    },
    [transitioning, totalPages],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [go]);

  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 math-dots-pattern opacity-50" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container-narrow mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          {/* Google logo + rating */}
          <div className="flex items-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-foreground">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Based on Google Reviews</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold font-display text-center text-foreground mb-3">
            What Our Students Say
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto">
            Real reviews from real students. See why aspirants trust Matheasy for their competitive exam preparation.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            onClick={() => go(-1)}
            aria-label="Previous reviews"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next reviews"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {visible.map((r) => (
              <div
                key={r.name}
                className="relative bg-card rounded-2xl border border-border p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in group"
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground text-sm leading-relaxed mb-5 line-clamp-4">
                  "{r.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                    {r.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-foreground text-sm truncate">{r.name}</span>
                      {/* Google verified check */}
                      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#4285F4" />
                        <path d="M8.5 12.5l2 2 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">{r.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === page ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground"}`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA to Google */}
        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/TSnwraPEwt18skgx6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline transition"
          >
            See all reviews on Google Maps
            <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.22-7.22H5.75a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V7.06l-7.22 7.22a.75.75 0 0 1-1.06 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
