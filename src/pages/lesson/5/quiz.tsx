import { LESSON5_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson5Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON5_WORDS} lessonNumber={5} />
    </div>
  );
};

export default Lesson5Quiz;