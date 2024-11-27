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
    <div className="min-h-screen bg-[#2a64ac]">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Button 
          onClick={() => navigate("/story")}
          className="mb-8 bg-white hover:bg-white/90 text-[#112d5b]"
        >
          Back to Stories
        </Button>

        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <h2 className="text-2xl font-medium text-white/80 mb-8">{mongolianTitle}</h2>

        <div className="mb-8 w-full">
          <img 
            src={image} 
            alt={title}
            className="w-full object-contain rounded-lg"
          />
        </div>

        <div className="space-y-6 bg-[#112d5b] p-6 rounded-lg border border-white/20">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Mongolian Text:</h3>
            <p className="text-white/80 whitespace-pre-line font-mongolian">
              {mongolianText}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">English Translation:</h3>
            <p className="text-white/80 whitespace-pre-line">
              {translation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;