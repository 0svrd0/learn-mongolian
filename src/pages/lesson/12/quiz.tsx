import { LESSON12_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson12Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON12_WORDS} lessonNumber={12} />
    </div>
  );
};

export default Lesson12Quiz;