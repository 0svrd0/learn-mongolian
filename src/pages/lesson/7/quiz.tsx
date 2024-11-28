import { LESSON7_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson7Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON7_WORDS} lessonNumber={7} />
    </div>
  );
};

export default Lesson7Quiz;