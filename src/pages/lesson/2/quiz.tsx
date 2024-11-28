import { LESSON2_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson2Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON2_WORDS} lessonNumber={2} />
    </div>
  );
};

export default Lesson2Quiz;