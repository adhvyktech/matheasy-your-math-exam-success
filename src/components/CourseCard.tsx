import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  path: string;
}

const CourseCard = ({ title, description, path }: CourseCardProps) => (
  <Link
    to={path}
    className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
  >
    <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
      View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </span>
  </Link>
);

export default CourseCard;
