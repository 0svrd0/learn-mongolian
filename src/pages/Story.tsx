import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const STORIES = [
  {
    id: 1,
    title: "Naraa and Her Morning",
    mongolianTitle: "Нараа ба түүний өглөө",
    image: "/lovable-uploads/15332487-3ec4-4499-96e6-f8765e4488dd.png"
  },
  {
    id: 2,
    title: "Colors and Nature",
    mongolianTitle: "Өнгө ба байгаль",
    image: "/lovable-uploads/f69a6d65-67c5-4291-9694-485819742cf8.png"
  },
  {
    id: 3,
    title: "At the Market",
    mongolianTitle: "Зах дээр",
    image: "/lovable-uploads/3a2e9e1b-918e-4e21-a7ff-383ae1c3d6ce.png"
  },
  {
    id: 4,
    title: "A Day at School",
    mongolianTitle: "Сургууль дээрх өдөр",
    image: "/lovable-uploads/bcd7bf4b-60d3-4509-9a7f-7991327eecf0.png"
  }
];

const Story = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#87CEEB]/10 p-8">
      <div className="container mx-auto">
        <Button 
          onClick={() => navigate("/")}
          className="mb-8 bg-[#8FBC8F] hover:bg-[#8FBC8F]/80 text-white"
        >
          Back to Home
        </Button>

        <h1 className="text-4xl font-bold text-[#2F4F4F] mb-8">Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORIES.map((story) => (
            <Card 
              key={story.id}
              className="p-6 hover:shadow-lg transition-shadow bg-white cursor-pointer"
              onClick={() => navigate(`/story/${story.id}`)}
            >
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-[#8B4513] mb-2">
                {story.title}
              </h2>
              <h3 className="text-xl font-medium text-[#2F4F4F]">
                {story.mongolianTitle}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;