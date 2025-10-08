import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import otraLogo from "@/assets/otra-logo.png";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={otraLogo} alt="OTRA Logo" className="w-10 h-10 transition-transform group-hover:scale-110" />
          <span className="text-2xl font-bold tracking-tight">OTRA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/courses" className="text-foreground hover:text-primary transition-colors font-medium">
            Courses
          </Link>
          <Link to="/projects" className="text-foreground hover:text-primary transition-colors font-medium">
            Projects
          </Link>
          <Link to="/sponsors" className="text-foreground hover:text-primary transition-colors font-medium">
            Sponsors
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Link to="/login">
            <Button variant="ghost" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
