import { LESSON11_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson11Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON11_WORDS} lessonNumber={11} />
    </div>
  );
};

export default Lesson11Quiz;