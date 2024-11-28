import { LESSON10_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson10Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON10_WORDS} lessonNumber={10} />
    </div>
  );
};

export default Lesson10Quiz;