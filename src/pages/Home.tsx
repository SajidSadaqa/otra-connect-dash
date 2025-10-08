import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/CourseCard";
import { Header } from "@/components/Header";
import otraLogo from "@/assets/otra-logo.png";

const Home = () => {
  const featuredCourses = [
    {
      title: "Spatuk Couresk",
      description: "Discover transforming course elt the curser fom Inter",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["AI & ML"],
    },
    {
      title: "Digital Art",
      description: "Discover transforah, course ed the doter fom Inter",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
      tags: ["View All Courses"],
    },
    {
      title: "Space Grotesk",
      description: "Discover transforating curse ed Ing unter fom Inter",
      category: "Robotics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      tags: ["Robotics"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Infinite Learning,<br />
                Infinite<br />
                Possibilities.
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover transformative courses & projects.
              </p>
              <div className="flex gap-4">
                <Link to="/courses">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="border-2 font-semibold px-8">
                    View Projects →
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full animate-float" />
              <img 
                src={otraLogo} 
                alt="OTRA Octopus" 
                className="relative w-full max-w-md drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard
              title="AI Research Project"
              description="Discover tneod pnigion"
              category="AI & ML"
              image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
              tags={["AI & ML"]}
            />
            <CourseCard
              title="Robotics Innovation"
              description="Discover tneod pnigion"
              category="Robotics"
              image="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&h=400&fit=crop"
              tags={["Robotics"]}
            />
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              TechCorp
            </div>
            <div className="flex items-center gap-3 text-xl font-semibold">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🔬</span>
              </div>
              Innovate Labs
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
