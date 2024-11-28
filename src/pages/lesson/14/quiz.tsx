import { LESSON14_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson14Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON14_WORDS} lessonNumber={14} />
    </div>
  );
};

export default Lesson14Quiz;