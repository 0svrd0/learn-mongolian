import { LESSON9_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson9Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON9_WORDS} lessonNumber={9} />
    </div>
  );
};

export default Lesson9Quiz;