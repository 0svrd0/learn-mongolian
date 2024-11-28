import { LESSON8_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson8Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON8_WORDS} lessonNumber={8} />
    </div>
  );
};

export default Lesson8Quiz;