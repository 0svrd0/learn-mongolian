import { LESSON18_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson18Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON18_WORDS} lessonNumber={18} />
    </div>
  );
};

export default Lesson18Quiz;