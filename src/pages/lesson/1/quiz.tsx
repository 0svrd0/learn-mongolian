import { LESSON1_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson1Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON1_WORDS} lessonNumber={1} />
    </div>
  );
};

export default Lesson1Quiz;