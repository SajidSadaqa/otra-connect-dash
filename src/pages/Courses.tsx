import { useState } from "react";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Topics");

  const filters = ["All Topics", "Web Dev", "Robotics", "Digital Art", "AI & ML"];

  const courses = [
    {
      title: "Spatuk Couresk",
      description: "Discover transforming curse elt the curser fom Inter",
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
    {
      title: "Web Development Mastery",
      description: "Learn modern web development from scratch",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Web Dev"],
    },
    {
      title: "Advanced Machine Learning",
      description: "Deep dive into ML algorithms and applications",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tags: ["AI & ML"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-8">Courses</h1>
          
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <div className="flex gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-card border-2"
                />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium">Sort By:</span>
              </div>
            </div>
            
            <div className="flex gap-3 flex-wrap">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" disabled className="font-medium">
              Previous
            </Button>
            <div className="flex gap-2">
              {[1, 2, 3, "...", 11, 12].map((page, idx) => (
                <Button
                  key={idx}
                  variant={page === 1 ? "default" : "outline"}
                  size="icon"
                  className={page === 1 ? "bg-accent hover:bg-accent/90" : ""}
                  disabled={page === "..."}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button variant="outline" className="font-medium">
              Next
            </Button>
          </div>

          <div className="text-center mt-6 text-muted-foreground">
            Page 1 of 12
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;
