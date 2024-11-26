import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Story = () => {
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: "The Wise Horse",
      description: "A tale of wisdom from the steppes",
      image: "/stories/horse.jpg"
    },
    {
      id: 2,
      title: "The Golden Eagle",
      description: "A story of freedom and courage",
      image: "/stories/eagle.jpg"
    },
    {
      id: 3,
      title: "The Kind Nomad",
      description: "Learning about Mongolian hospitality",
      image: "/stories/nomad.jpg"
    },
    {
      id: 4,
      title: "The Blue Sky",
      description: "A story about nature and respect",
      image: "/stories/sky.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#4b93ec] p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Stories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <Card 
              key={story.id}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-[#2a64ac]"
              onClick={() => navigate(`/story/${story.id}`)}
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                {story.title}
              </h2>
              <p className="text-white/80">
                {story.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;