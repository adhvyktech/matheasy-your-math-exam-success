export interface CourseData {
  slug: string;
  title: string;
  intro: string;
  features: string[];
  syllabus: string[];
}

export const courseData: CourseData[] = [
  {
    slug: "pg-trb-mathematics",
    title: "PG TRB Mathematics",
    intro: "Preparation for Tamil Nadu Teachers Recruitment Board postgraduate mathematics exam with full syllabus coverage and exam-focused teaching.",
    features: [
      "Complete syllabus coverage",
      "Advanced concept explanations",
      "Previous year question discussion",
      "Practice problems",
      "Doubt clarification sessions",
    ],
    syllabus: [
      "Real Analysis",
      "Abstract Algebra",
      "Linear Algebra",
      "Complex Analysis",
      "Differential Equations",
      "Topology",
      "Numerical Methods",
      "Probability & Statistics",
    ],
  },
  {
    slug: "ug-trb-mathematics",
    title: "UG TRB Mathematics",
    intro: "Strengthens undergraduate mathematics foundations and prepares candidates for UG TRB mathematics examinations.",
    features: [
      "Core concepts explained clearly",
      "Topic-wise practice problems",
      "Previous question discussion",
      "Doubt solving sessions",
    ],
    syllabus: [
      "Calculus",
      "Linear Algebra",
      "Differential Equations",
      "Discrete Mathematics",
      "Probability & Statistics",
      "Mathematical Methods",
    ],
  },
  {
    slug: "tnpsc-statistical-services",
    title: "TNPSC Combined Statistical Services",
    intro: "Focused preparation for TNPSC Combined Statistical Services exam with statistics syllabus coverage.",
    features: [
      "Statistics topic coverage",
      "Problem solving sessions",
      "Previous year discussion",
      "Doubt clarification",
    ],
    syllabus: [
      "Probability theory",
      "Sampling techniques",
      "Statistical inference",
      "Regression analysis",
      "Distributions & testing",
    ],
  },
  {
    slug: "set-mathematics",
    title: "SET Mathematics",
    intro: "Preparation for State Eligibility Test in Mathematics covering subject topics and exam strategy.",
    features: [
      "Complete syllabus coverage",
      "Topic-wise concept sessions",
      "Previous year question discussion",
      "Doubt clarification",
    ],
    syllabus: [
      "Analysis",
      "Algebra",
      "Calculus",
      "Linear Algebra",
      "Differential Equations",
      "Probability & Statistics",
    ],
  },
  {
    slug: "net-mathematics",
    title: "NET Mathematics",
    intro: "Comprehensive coaching for NET Mathematics focusing on conceptual depth and exam-oriented preparation.",
    features: [
      "Detailed topic-wise lectures",
      "Advanced problem solving practice",
      "Previous year discussion",
      "Doubt clarification sessions",
    ],
    syllabus: [
      "Real Analysis",
      "Linear Algebra",
      "Complex Analysis",
      "Differential Equations",
      "Topology",
      "Numerical Methods",
      "Probability",
    ],
  },
];
