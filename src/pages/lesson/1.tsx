import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LESSON1_WORDS } from "@/data/lessons/lesson1";

const Lesson1 = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const playAudio = async () => {
    const currentWord = LESSON1_WORDS[currentWordIndex];
    if (!currentWord.audio) {
      toast({
        title: "Audio not available",
        description: "Sorry, this word doesn't have audio yet.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsAudioPlaying(true);
      const audio = new Audio(currentWord.audio);
      
      audio.addEventListener('ended', () => {
        setIsAudioPlaying(false);
      });

      audio.addEventListener('error', () => {
        setIsAudioPlaying(false);
        toast({
          title: "Error",
          description: "Could not play the audio file",
          variant: "destructive",
        });
      });

      await audio.play();
    } catch (error) {
      console.error('Playback error:', error);
      setIsAudioPlaying(false);
      toast({
        title: "Error",
        description: "Could not play the audio file",
        variant: "destructive",
      });
    }
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % LESSON1_WORDS.length);
  };

  const previousWord = () => {
    setCurrentWordIndex((prev) => 
      (prev - 1 + LESSON1_WORDS.length) % LESSON1_WORDS.length
    );
  };

  const currentWord = LESSON1_WORDS[currentWordIndex];

  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={() => navigate("/learn")}
          className="mb-8 bg-mongol-blue hover:bg-mongol-navy text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Lessons
        </Button>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-mongol-blue mb-4">
              Lesson 1: Basic Phrases
            </h1>
            <p className="text-gray-600 mb-6">
              Learn essential Mongolian phrases for basic communication
            </p>

            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-full max-w-md aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Learning scene"
                  className="rounded-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <p className="text-white text-4xl font-bold text-center">
                    {currentWord.mongolian}
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4 w-full max-w-md">
                <p className="text-xl font-medium">
                  Pronunciation: "{currentWord.pronunciation}"
                </p>
                <p className="text-lg text-gray-600">
                  Meaning: {currentWord.meaning}
                </p>

                <div className="flex justify-center gap-4">
                  <Button
                    onClick={playAudio}
                    disabled={isAudioPlaying}
                    className="bg-mongol-gold hover:bg-yellow-600 text-white"
                  >
                    {isAudioPlaying ? "Playing..." : "Listen"}
                  </Button>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={previousWord}
                    variant="outline"
                    className="border-mongol-blue text-mongol-blue hover:bg-mongol-blue hover:text-white"
                  >
                    Previous Word
                  </Button>
                  <Button
                    onClick={nextWord}
                    variant="outline"
                    className="border-mongol-blue text-mongol-blue hover:bg-mongol-blue hover:text-white"
                  >
                    Next Word
                  </Button>
                </div>
              </div>
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

        <div className="mt-8">
          <p className="text-sm text-gray-500 text-center">
            Progress: {currentWordIndex + 1} / {LESSON1_WORDS.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;