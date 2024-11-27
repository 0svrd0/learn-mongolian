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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/placeholder.svg" 
              alt="MongoLearn Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold text-blue-600">
              MongoLearn
            </span>
          </div>
          
          <nav className="flex flex-wrap gap-2">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant={isActive(item.path) ? "default" : "ghost"}
                className={`${
                  isActive(item.path)
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                } transition-all duration-200`}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;