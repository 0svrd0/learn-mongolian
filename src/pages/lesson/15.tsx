import { Card } from "@/components/ui/card";
import { vocabulary } from "@/data/vocabulary";

const Lesson15 = () => {
  const lessonWords = vocabulary[14]; // Animals vocabulary

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lesson 15: Animals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessonWords.map((word, index) => (
          <Card key={index} className="p-4">
            <div className="font-bold">{word.mongolian}</div>
            <div className="text-gray-600">{word.pronunciation}</div>
            <div>{word.english}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Lesson15;