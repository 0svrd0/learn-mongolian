import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TRANSPORTATION = [
  { mongolian: "Машин", pronunciation: "Mashin", meaning: "Car" },
  { mongolian: "Автобус", pronunciation: "Avtobus", meaning: "Bus" },
  { mongolian: "Галт тэрэг", pronunciation: "Galt tereg", meaning: "Train" },
  { mongolian: "Онгоц", pronunciation: "Ongots", meaning: "Airplane" },
  { mongolian: "Такси", pronunciation: "Taksi", meaning: "Taxi" },
  { mongolian: "Дугуй", pronunciation: "Dugui", meaning: "Bicycle" },
  { mongolian: "Мотоцикл", pronunciation: "Mototsikl", meaning: "Motorcycle" },
  { mongolian: "Морь", pronunciation: "Mori", meaning: "Horse" },
  { mongolian: "Тэмээ", pronunciation: "Temee", meaning: "Camel" },
  { mongolian: "Завь", pronunciation: "Zavi", meaning: "Boat" },
  { mongolian: "Метро", pronunciation: "Metro", meaning: "Subway" },
  { mongolian: "Зам", pronunciation: "Zam", meaning: "Road" },
  { mongolian: "Гүүр", pronunciation: "Güür", meaning: "Bridge" },
  { mongolian: "Буудал", pronunciation: "Buudal", meaning: "Station" },
  { mongolian: "Нисэх онгоцны буудал", pronunciation: "Nisekh ongotsny buudal", meaning: "Airport" }
];

const Lesson7 = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const playAudio = () => {
    setIsAudioPlaying(true);
    const word = TRANSPORTATION[currentWordIndex].mongolian;
    const audio = new Audio(`/audio/lesson7/${word}.mp3`);
    
    audio.onended = () => {
      setIsAudioPlaying(false);
    };

    audio.onerror = () => {
      setIsAudioPlaying(false);
      toast({
        title: "Error",
        description: "Could not play the audio file",
        variant: "destructive",
      });
    };

    audio.play().catch((error) => {
      setIsAudioPlaying(false);
      toast({
        title: "Error",
        description: "Could not play the audio file",
        variant: "destructive",
      });
    });
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % TRANSPORTATION.length);
  };

  const previousWord = () => {
    setCurrentWordIndex((prev) => 
      (prev - 1 + TRANSPORTATION.length) % TRANSPORTATION.length
    );
  };

  const currentWord = TRANSPORTATION[currentWordIndex];

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
              Lesson 7: Transportation
            </h1>
            <p className="text-gray-600 mb-6">
              Learn essential Mongolian transportation vocabulary
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
            onClick={() => navigate("/lesson/7/quiz")}
            className="bg-mongol-blue hover:bg-mongol-navy text-white"
          >
            Take Quiz
          </Button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500 text-center">
            Progress: {currentWordIndex + 1} / {TRANSPORTATION.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson7;