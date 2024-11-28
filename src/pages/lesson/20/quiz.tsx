import { LESSON20_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson20Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON20_WORDS} lessonNumber={20} />
    </div>
  );
};

export default Lesson20Quiz;