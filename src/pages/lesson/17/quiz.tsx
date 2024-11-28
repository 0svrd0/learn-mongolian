import { LESSON17_WORDS } from "@/data/vocabulary";
import Quiz from "@/components/Quiz";

const Lesson17Quiz = () => {
  return (
    <div className="min-h-screen bg-mongol-cream p-8">
      <Quiz words={LESSON17_WORDS} lessonNumber={17} />
    </div>
  );
};

export default Lesson17Quiz;