import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Lesson1 = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const playAudio = () => {
    setIsAudioPlaying(true);
    // Audio implementation will be added in future updates
    setTimeout(() => setIsAudioPlaying(false), 2000);
    toast({
      title: "Playing audio...",
      description: "Audio feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={() => navigate("/learn")}
          className="mb-8 bg-mongol-blue hover:bg-mongol-navy text-white"
        >
          Back to Lessons
        </Button>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-mongol-blue mb-4">
              Lesson 1: Basic Greetings
            </h1>
            <p className="text-gray-600 mb-6">
              Let's learn how to say "Hello" in Mongolian
            </p>

            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
                  alt="Warm greeting scene"
                  className="rounded-lg w-full max-w-md h-48 object-cover mb-4"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <p className="text-white text-4xl font-bold">
                    Сайн байна уу
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-xl mb-2">Pronunciation: "Sain baina uu"</p>
                <p className="text-gray-600">Meaning: Hello</p>
              </div>

              <Button
                onClick={playAudio}
                disabled={isAudioPlaying}
                className="bg-mongol-gold hover:bg-yellow-600 text-white"
              >
                {isAudioPlaying ? "Playing..." : "Listen to Pronunciation"}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => navigate("/learn")}
            className="border-mongol-blue text-mongol-blue hover:bg-mongol-blue hover:text-white"
          >
            Back to Lessons
          </Button>
          <Button
            onClick={() => navigate("/lesson/1/quiz")}
            className="bg-mongol-blue hover:bg-mongol-navy text-white"
          >
            Take Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;