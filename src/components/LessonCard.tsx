import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface LessonCardProps {
  number: number;
  title: string;
  description: string;
  words: Array<{ mongolian: string; pronunciation: string; meaning: string }>;
}

const LessonCard = ({ number, title, description, words }: LessonCardProps) => {
  const navigate = useNavigate();

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

  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-mongol-sky/20">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-mongol-sky/10 text-mongol-earth font-semibold">
          {number}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-mongol-earth">
            {title}
          </h2>
          <p className="text-sm text-mongol-charcoal/70 mt-1">
            {description}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <Button 
          onClick={() => navigate(`/lesson/${number}`)}
          className="w-full bg-mongol-grass hover:bg-mongol-grass/90 text-white"
        >
          Start Lesson
        </Button>
        <Button
          onClick={() => exportVocabulary(words, `${number}-${title}`)}
          variant="outline"
          className="w-full border-mongol-grass text-mongol-grass hover:bg-mongol-grass/10"
        >
          Export Vocabulary
        </Button>
      </div>
    </Card>
  );
};

export default LessonCard;