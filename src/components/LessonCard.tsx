import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  words: Array<{ mongolian: string; pronunciation: string; meaning: string }>;
}

const LessonCard = ({ number, title, description, words }: LessonCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const exportVocabulary = (lessonWords: any[], lessonTitle: string) => {
    const csvContent = [
      "Mongolian,Pronunciation,Meaning",
      ...lessonWords.map(word => 
        `${word.mongolian || ''},${word.pronunciation},${word.meaning}`
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `vocabulary-lesson-${lessonTitle.toLowerCase().replace(/\s+/g, '-')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const playRandomWord = () => {
    if (words.length > 0) {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const audioPath = `/audio/lesson${number}/${randomWord.mongolian}.mp3`;
      
      const audio = new Audio(audioPath);
      audio.onerror = () => {
        toast({
          title: "Audio not available",
          description: "This word's audio is not yet available.",
          variant: "destructive",
        });
      };
      
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        toast({
          title: "Audio playback failed",
          description: "Unable to play the audio file.",
          variant: "destructive",
        });
      });
    }
  };

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-mongol-sky-100">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mongol-sky-50 text-mongol-sky-500 font-semibold">
          {number}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-mongol-charcoal">
            {title}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {description}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Button 
          onClick={() => navigate(`/lesson/${number}`)}
          className="w-full bg-mongol-sky-500 hover:bg-mongol-sky-600 text-white"
        >
          Start Lesson
        </Button>
        <div className="flex gap-2">
          <Button
            onClick={() => exportVocabulary(words, `${number}-${title}`)}
            variant="outline"
            className="flex-1 border-mongol-sky-200 text-mongol-sky-500 hover:bg-mongol-sky-50"
          >
            Export Vocabulary
          </Button>
          <Button
            onClick={playRandomWord}
            variant="outline"
            className="border-mongol-sky-200 text-mongol-sky-500 hover:bg-mongol-sky-50"
          >
            🔊
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LessonCard;