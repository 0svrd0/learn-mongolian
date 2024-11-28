import { LESSON3_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson3Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON3_WORDS} lessonNumber={3} />
    </div>
  );
};

export default Lesson3Quiz;