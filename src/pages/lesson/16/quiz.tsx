import { LESSON16_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson16Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON16_WORDS} lessonNumber={16} />
    </div>
  );
};

export default Lesson16Quiz;