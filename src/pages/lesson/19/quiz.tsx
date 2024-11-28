import { LESSON19_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson19Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON19_WORDS} lessonNumber={19} />
    </div>
  );
};

export default Lesson19Quiz;