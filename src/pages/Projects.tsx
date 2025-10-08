import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Research Project",
      description: "Discover tneod pnigion",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI & ML"],
    },
    {
      title: "Robotics Innovation",
      description: "Advanced robotics systems and automation",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop",
      tags: ["Robotics"],
    },
    {
      title: "Creative Digital Art",
      description: "Exploring digital art with modern tools",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
      tags: ["Digital Art"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore innovative projects from our community
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <CourseCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
