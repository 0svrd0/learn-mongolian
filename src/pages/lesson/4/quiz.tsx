import { LESSON4_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson4Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON4_WORDS} lessonNumber={4} />
    </div>
  );
};

export default Lesson4Quiz;