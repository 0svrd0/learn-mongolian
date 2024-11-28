import { LESSON6_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson6Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON6_WORDS} lessonNumber={6} />
    </div>
  );
};

export default Lesson6Quiz;