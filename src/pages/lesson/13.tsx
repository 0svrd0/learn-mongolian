import { Card } from "@/components/ui/card";
import { LESSON13_WORDS } from "@/data/vocabulary";

const Lesson13 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Lesson 13: Occupations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {LESSON13_WORDS.map((word, index) => (
          <Card key={index} className="p-4">
            <div className="font-bold">{word.mongolian}</div>
            <div className="text-gray-600">{word.pronunciation}</div>
            <div>{word.meaning}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Lesson13;