import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LESSON5_WORDS } from "@/data/lessons/lesson5";
import { useState } from "react";

const Lesson5 = () => {
  const navigate = useNavigate();
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = (audioPath: string) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    const newAudio = new Audio(audioPath);
    newAudio.play();
    setAudio(newAudio);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mongol-sky/5 to-mongol-sky/20 p-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <Button onClick={() => navigate("/learn")} variant="ghost" className="group">
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Lessons
          </Button>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-mongol-earth mb-6">
            Lesson 5: Nature
          </h1>
          <p className="text-xl text-mongol-charcoal/80">
            Learn essential nature-related vocabulary in Mongolian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LESSON5_WORDS.map((word, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-mongol-earth">
                    {word.mongolian}
                  </h3>
                  <p className="text-sm text-mongol-charcoal/60 mt-1">
                    {word.pronunciation}
                  </p>
                </div>
                <p className="text-lg text-mongol-charcoal">{word.meaning}</p>
                <Button
                  onClick={() => playAudio(word.audio)}
                  className="w-full bg-mongol-grass hover:bg-mongol-grass/90"
                >
                  Listen
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson5;