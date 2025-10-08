import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  tags?: string[];
}

export const CourseCard = ({ title, description, category, image, tags = [] }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-2 border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg aspect-video">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
