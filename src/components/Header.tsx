import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/learn", label: "Learn Vocabulary" },
    { path: "/games", label: "Quizzes" },
    { path: "/story", label: "Story" },
  ];

  return (
    <header className="bg-mongol-white border-b border-mongol-gold/20 py-4 px-8 mb-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img 
            src="/placeholder.svg" 
            alt="MongoLearn Logo" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-mongol-earth">MongoLearn</span>
        </div>
        
        <nav className="flex flex-wrap gap-2">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? "default" : "ghost"}
              className={`${
                isActive(item.path)
                  ? "bg-mongol-grass text-white"
                  : "text-mongol-charcoal hover:bg-mongol-grass/10"
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;