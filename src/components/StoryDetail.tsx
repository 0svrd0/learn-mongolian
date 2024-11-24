import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface StoryDetailProps {
  title: string;
  mongolianTitle: string;
  mongolianText: string;
  translation: string;
  image: string;
}

const StoryDetail = ({ title, mongolianTitle, mongolianText, translation, image }: StoryDetailProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#87CEEB]/10 p-8">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={() => navigate("/story")}
          className="mb-8 bg-[#8FBC8F] hover:bg-[#8FBC8F]/80 text-white"
        >
          Back to Stories
        </Button>

        <h1 className="text-4xl font-bold text-[#2F4F4F] mb-4">{title}</h1>
        <h2 className="text-2xl font-medium text-[#8B4513] mb-8">{mongolianTitle}</h2>

        <div className="mb-8 w-full">
          <img 
            src={image} 
            alt={title}
            className="w-full object-contain"
          />
        </div>

        <div className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">Mongolian Text:</h3>
            <p className="text-[#2F4F4F] whitespace-pre-line font-mongolian">
              {mongolianText}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">English Translation:</h3>
            <p className="text-[#2F4F4F] whitespace-pre-line">
              {translation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;